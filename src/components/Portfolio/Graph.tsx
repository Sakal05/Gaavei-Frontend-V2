import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import { NoSsr } from "@mui/base/NoSsr";
import Skeleton from "@mui/material/Skeleton";
import { LineChart } from "@mui/x-charts/LineChart";
// import { DataSet } from "@/DummyData/PortfolioData";

export default function Graph({ data }: { data: any }) {
  return (
    <NoSsr fallback={<Skeleton variant="rectangular" width="100%"></Skeleton>}>
      <LineChart
        dataset={data}
        xAxis={[{ scaleType: "band", dataKey: "month" }]}
        series={[
          {
            // label: "Earn: ",
            dataKey: "earning",
            area: false,
            color: 'green',
            valueFormatter: (value: number | any) => `Earn ${value}%`
          },
        ]}
        leftAxis={{ disableLine: true }}
        // width={800} 
        height={300}
      />
    </NoSsr>
  );
}
