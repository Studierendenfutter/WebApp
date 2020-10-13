import React, { useState, useEffect } from "react";
import AdminLogin from "../../components/AdminLogin";
import fetchStatistics from "../../services/backend/fetchStatistics";
import RTChart from "react-rt-chart";

import "./Stats.css";

const useForceUpdate = () => useState()[1];

export default function Stats() {
  const [, setPassword] = useState();
  const [data, setData] = useState();

  const fetchData = async (password) => {
    const stats = await fetchStatistics(password);
    setData(stats);
  };

  useEffect(() => {
    setInterval(useForceUpdate, 1000);
  });

  if (!data) {
    return (
      <AdminLogin
        onSubmit={({ password }) => {
          setPassword(password);
          fetchData(password);
        }}
      />
    );
  }

  return (
    <div>
      <h1 className="sf-stats-title">Admin Panel</h1>
      <div className="sf-stats-big-numbers">
        <div className="sf-stats-big-number">
          <span className="sf-stats-big-number-number">{data.activeUsers}</span>
          <span>active users</span>
        </div>
        <div className="sf-stats-big-number">
          <span className="sf-stats-big-number-number">{data.emailsSend}</span>
          <span>emails send</span>
        </div>
        <div className="sf-stats-big-number">
          <span className="sf-stats-big-number-number">
            {data.emailsOpened}
          </span>
          <span>emails opened</span>
        </div>
        <div className="sf-stats-big-number">
          <span className="sf-stats-big-number-number">
            {data.emailsSendToday}
          </span>
          <span>send today</span>
        </div>
        <div className="sf-stats-big-number">
          <span className="sf-stats-big-number-number">
            {data.emailsOpenedToday}
          </span>
          <span>opened today</span>
        </div>
        <div className="sf-stats-big-number">
          <span className="sf-stats-big-number-number">
            {((data.emailsOpenedToday / data.emailsSendToday) * 100).toFixed(2)}
          </span>
          <span>% opened today</span>
        </div>
      </div>
    </div>
  );
}
