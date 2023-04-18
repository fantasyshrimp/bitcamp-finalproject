import React, { useEffect, useState } from "react";
import axios from "axios";
import { ResponsiveLine } from "@nivo/line";

const Stats = () => {
  const [chartData, setChartData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(() => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday;
  });

  const fetchData = async (date = new Date()) => {
    const startDate = new Date(date);
    startDate.setDate(startDate.getDate() - 6);
    const endDate = new Date(date);
    endDate.setDate(endDate.getDate() + 1);

    try {
      const response = await axios.get("http://localhost:8080/visitors", {
        params: {
          start_date: startDate.toISOString().split("T")[0],
          end_date: endDate.toISOString().split("T")[0],
        },
      });
      // console.log("endDate:", endDate.toISOString().split("T")[0]); 서버에서 받아온 데이터
      // console.log("Response data:", response.data); // 응답 데이터 출력
      const formattedData = formatData(response.data);
      setChartData(formattedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const formatData = (data) => {
    const aggregatedData = data.reduce((acc, item) => {
      const dateObj = new Date(item.visitorDt);
      const date = `${dateObj.getFullYear()}-${String(
        dateObj.getMonth() + 1
      ).padStart(2, "0")}-${String(dateObj.getDate()).padStart(2, "0")}`;

      if (!acc[date]) {
        acc[date] = 1;
      } else {
        acc[date]++;
      }
      return acc;
    }, {});

    const chartData = [
      {
        id: "방문자",
        color: "hsl(36, 70%, 50%)",
        data: Object.entries(aggregatedData).map(([x, y]) => ({ x, y })),
      },
    ];

    return chartData;
  };

  useEffect(() => {
    fetchData(selectedDate);
  }, [selectedDate]);

  const handleDateChange = (event) => {
    const dateParts = event.target.value.split("-");
    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1; // month is 0-indexed
    const day = parseInt(dateParts[2], 10);
    const now = new Date();
    const newDate = new Date(
      year,
      month,
      day,
      now.getHours(),
      now.getMinutes(),
      now.getSeconds()
    );

    console.log(
      "선택된 날짜:",
      newDate.toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })
    );
    setSelectedDate(newDate);
  };

  // 오늘 날짜를 maxDate 변수에 저장
  const maxDate = (() => {
    const today = new Date();
    today.setDate(today.getDate() - 1);
    return today.toISOString().split("T")[0];
  })();

  return (
    <div>
      <input
        id="calendar"
        type="date"
        value={selectedDate.toISOString().split("T")[0]}
        onChange={handleDateChange}
        max={maxDate} // 최대 날짜를 사용자의 현재날짜 -1로 설정
      />
      <div
        style={{ height: "300px", backgroundColor: `var(--aim-text-default)` }}
      >
        <ResponsiveLine
          data={chartData}
          margin={{ top: 30, right: 40, bottom: 70, left: 80 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 15,
            tickPadding: 0,
            tickRotation: 0,
            legend: "날짜",
            legendOffset: 45,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "조회수",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          enableSlices="x"
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          enableArea={false}
          useMesh={true}
          // legends={[
          //   {
          //     anchor: "top-left",
          //     direction: "row",
          //     justify: false,
          //     translateX: 0,
          //     translateY: -40,
          //     itemsSpacing: 5,
          //     itemDirection: "left-to-right",
          //     itemWidth: 80,
          //     itemHeight: 20,
          //     itemOpacity: 0.75,
          //     symbolSize: 15,
          //     symbolShape: "circle",
          //     symbolBorderColor: "rgba(0, 0, 0, .5)",
          //     effects: [
          //       {
          //         on: "hover",
          //         style: {
          //           itemBackground: "rgba(0, 0, 0, .03)",
          //           itemOpacity: 1,
          //         },
          //       },
          //     ],
          //   },
          // ]}
        />
      </div>
    </div>
  );
};
export default Stats;
