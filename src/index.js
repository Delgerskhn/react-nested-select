import React, { useState, useEffect } from "react";
import "./src/Category.css";
export default function Category(props) {
  const [cats, setCat] = useState([]);
  const [selected, setSelected] = useState({ P: null, N: props.defaultText });
  const [handleMenu, setHandleMenu] = useState(false);
  const [searchResult, setResult] = useState(false);
  useEffect(() => {
    (async function () {
      setCat(await props.options);
    })();
  }, [props.options]);
  useEffect(() => {
    props.onSelect(selected);
  }, [selected]);
  const inputHandle = (e) => {
    let matches = [];
    let name = e.target.value;
    if (!name.length) {
      setResult(false);
      return 0;
    }
    const catsRecursion = (cats) => {
      if (cats && cats.length) {
        cats.forEach((cat) => {
          //name gedeg huvisagch ni input iin utga bolno
          let condition =
            (cat.N.toUpperCase().includes(name.toUpperCase()) ||
              (cat.A && cat.A.toUpperCase().includes(name.toUpperCase()))) &&
            !(cat.H && cat.H.length);
          if (condition) {
            matches.push(cat);
          }
          if (cat.H && cat.H.length) {
            let sub = cat.H.slice(0);
            catsRecursion(
              sub.map((sub, i) => {
                return {
                  P: sub.P,
                  N: sub.N,
                  H: sub.H,
                  A: (cat.A ? cat.A : cat.N) + (sub.H ? " > " + sub.N : ""),
                };
              })
            );
          }
        });
      }
    };
    catsRecursion(cats);
    setResult(
      matches.length
        ? matches.map((a) => {
            return { P: a.P, N: a.N, H: [], A: a.A };
          })
        : [{ N: props.notFound }]
    );
  };
  useEffect(() => {
    const popoverFunction = () => {
      setHandleMenu(false);
    };
    document.addEventListener("click", popoverFunction);
    return function cleanup() {
      document.removeEventListener("click", popoverFunction);
    };
  }, []);
  useEffect(() => {
    if (handleMenu) document.querySelector("#category-select .search").focus();
  }, [handleMenu]);
  return (
    <div id="category-select" style={{ width: `${props.width}px` }}>
      <div
        className="selected apparent selbox hover"
        onClick={(e) => {
          e.nativeEvent.stopImmediatePropagation();
          setHandleMenu(!handleMenu);
        }}
      >
        <p className="own">{selected.N}</p>
        {selected.A ? <p className="ancestor">{selected.A}</p> : ""}
        <div className="arrow" style={{ right: "21px", top: "18px" }}>
          <img
            src="/Icons_flat/arrow-down.svg"
            style={{ transform: !handleMenu ? "rotate(90deg)" : "" }}
            height="10px"
            alt=""
          />
        </div>
      </div>
      <div
        className="options selbox"
        style={{
          display: handleMenu ? "flex" : "none",
          width: `${props.width - 10}px`,
        }}
        onClick={(e) => e.nativeEvent.stopImmediatePropagation()}
      >
        <input
          placeholder={props.searchPlaceholder}
          className="search "
          type="text"
          onChange={(e) => inputHandle(e)}
        />
        <Options
          realOptions={searchResult || cats.slice(0)}
          options={
            searchResult ||
            cats.slice(0).map((opt) => {
              return { N: opt.N, P: opt.P, H: [], A: opt.N };
            })
          }
          padding={12}
          search={searchResult ? true : false}
          setSelected={setSelected}
          setHandleMenu={setHandleMenu}
          setResult={setResult}
        />
      </div>
    </div>
  );
}

function Options(props) {
  let [options, setOptions] = useState([]);
  useEffect(() => {
    if (props.options) setOptions(props.options);
  }, [props.options]);
  const handleOptions = (i) => {
    if (options[i].N != props.notFound) {
      let arr = options.slice(0);
      if (arr[i].H.length) arr[i].H = [];
      else if (props.realOptions[i].H && props.realOptions[i].H.length)
        arr[i].H = props.realOptions[i].H.map((opt) => {
          return {
            N: opt.N,
            P: opt.P,
            H: [],
            A: arr[i].A + (opt.H ? " > " + opt.N : ""),
          };
        });
      else {
        props.setSelected(arr[i]);
        props.setHandleMenu(0);
        props.setResult(false);
        document.querySelector("#category-select .search").value = "";
      }
      setOptions(arr);
    }
  };
  return (
    <div>
      {options.map((item, i) => (
        <div className="option" key={i}>
          <div
            className="text  hover"
            onClick={() => handleOptions(i)}
            style={{ paddingLeft: `${props.padding}px` }}
          >
            {item.N}
            {props.search ? <p className="ancestor">{item.A}</p> : ""}
            {props.realOptions[i] && props.realOptions[i].H && !props.search ? (
              <div className="arrow">
                <img
                  src="/Icons_flat/arrow-down.svg"
                  style={{
                    transform: item.H && !item.H.length ? "rotate(90deg)" : "",
                  }}
                  height="10px"
                  alt=""
                  srsSet=""
                />
              </div>
            ) : (
              ""
            )}
          </div>
          <Options
            setSelected={props.setSelected}
            options={item.H}
            realOptions={props.realOptions[i] ? props.realOptions[i].H : []}
            padding={props.padding + 10}
            setHandleMenu={props.setHandleMenu}
            setResult={props.setResult}
          />
        </div>
      ))}
    </div>
  );
}
