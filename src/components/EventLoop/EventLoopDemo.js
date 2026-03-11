import React, { useState } from "react";
import styles from "./EventLoopDemo.module.css";

const EventLoopDemo = () => {
  const [logs, setLogs] = useState([]);

  const runDemo = () => {
    setLogs(["Synchronous log: Started demo"]);

    Promise.resolve().then(() => {
      setLogs((prev) => [
        ...prev,
        "Microtask: Promise resolved before timers",
      ]);
    });

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        "Macrotask: setTimeout ran after microtasks",
      ]);
    }, 0);

    setLogs((prev) => [...prev, "Synchronous log: Finished scheduling tasks"]);
  };

  return (
    <section className={styles.wrapper}>
      <div className="Container">
        <p className={styles.eyebrow}>Async Mindset</p>
        <h2 className={styles.heading}>
          Event loop walkthrough in plain English
        </h2>
        <p className={styles.description}>
          Click the button to watch synchronous logs, microtasks (Promises) and
          macrotasks (timers) resolve in the exact order enforced by the
          JavaScript event loop. I use this same reasoning when designing API
          calls and UI feedback states.
        </p>
        <div className={styles.controls}>
          <button className="btn PrimaryBtn btn-shadow" onClick={runDemo}>
            Run event loop demo
          </button>
          <span className={styles.helper}>
            Tip: repeat the demo to see the consistent ordering.
          </span>
        </div>
        <ol className={styles.logList}>
          {logs.length === 0 && (
            <li className={styles.placeholder}>
              Logs will show up here once you run the demo.
            </li>
          )}
          {logs.map((log, index) => (
            <li key={log + index} className={styles.logItem}>
              {log}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default EventLoopDemo;

