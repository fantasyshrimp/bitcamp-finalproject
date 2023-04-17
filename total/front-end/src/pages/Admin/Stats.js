import React from "react";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "japan",
    color: "hsl(36, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 62,
      },
      {
        x: "helicopter",
        y: 283,
      },
      {
        x: "boat",
        y: 216,
      },
      {
        x: "train",
        y: 165,
      },
      {
        x: "subway",
        y: 244,
      },
      {
        x: "bus",
        y: 44,
      },
      {
        x: "car",
        y: 244,
      },
      {
        x: "moto",
        y: 17,
      },
      {
        x: "bicycle",
        y: 76,
      },
      {
        x: "horse",
        y: 132,
      },
      {
        x: "skateboard",
        y: 79,
      },
      {
        x: "others",
        y: 97,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(139, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 293,
      },
      {
        x: "helicopter",
        y: 21,
      },
      {
        x: "boat",
        y: 249,
      },
      {
        x: "train",
        y: 146,
      },
      {
        x: "subway",
        y: 61,
      },
      {
        x: "bus",
        y: 242,
      },
      {
        x: "car",
        y: 205,
      },
      {
        x: "moto",
        y: 284,
      },
      {
        x: "bicycle",
        y: 96,
      },
      {
        x: "horse",
        y: 103,
      },
      {
        x: "skateboard",
        y: 61,
      },
      {
        x: "others",
        y: 164,
      },
    ],
  },
];

const Stats = () => (
  <div style={{ height: "300px", backgroundColor: `var(--aim-text-default)` }}>
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 40, bottom: 50, left: 80 }}
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
        legend: "transportation",
        legendOffset: 40,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -45,
        legendPosition: "middle",
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      enableArea={true}
      useMesh={true}
      legends={[
        {
          anchor: "top-left",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: -40,
          itemsSpacing: 5,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 15,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  </div>
);

export default Stats;
