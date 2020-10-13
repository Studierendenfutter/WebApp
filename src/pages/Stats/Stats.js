import React, { useState } from "react";
import AdminLogin from "../../components/AdminLogin";
import fetchStatistics from "../../services/backend/fetchStatistics";
import Chart from "react-apexcharts";
import getDateString from "../../services/utils/getDateString";

import "./Stats.css";

export default function Stats() {
  const [, setPassword] = useState();
  const [data, setData] = useState();

  const fetchData = async (password) => {
    const stats = await fetchStatistics(password);
    setData(stats);
  };

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
      <div>
        <h2 className="sf-stats-heading">Emails</h2>
        <Chart
          options={{
            chart: {
              id: "sf-email-chart",
            },
            xaxis: {
              categories: data
                ? data.emailsSendDaily.map((eod) =>
                    getDateString(new Date(eod.date))
                  )
                : [],
            },
          }}
          series={[
            {
              name: "emails send",
              data: data ? data.emailsOpenedDaily.map((eod) => eod.count) : [],
            },
            {
              name: "emails opened",
              data: data ? data.emailsSendDaily.map((eod) => eod.count) : [],
            },
          ]}
          type="line"
          width={"100%"}
          height={320}
        />
      </div>
      <div>
        <h2 className="sf-stats-heading">Users</h2>
        <Chart
          options={{
            chart: {
              id: "sf-user-chart",
            },
            xaxis: {
              categories: data
                ? data.userSignupsPerMonth.map((us) => us.year + "-" + us.month)
                : [],
            },
          }}
          series={[
            {
              name: "signups",
              data: data ? data.userSignupsPerMonth.map((us) => us.count) : [],
            },
          ]}
          type="line"
          width={"100%"}
          height={320}
        />
      </div>
    </div>
  );
}
