import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import { NoSsr } from "@mui/base/NoSsr";
import Skeleton from "@mui/material/Skeleton";

export default function Chart({ data }: { data: number[] }) {
  return (
    <NoSsr fallback={<Skeleton variant="rectangular" width='100%'></Skeleton>}>
      <SparkLineChart data={data} height={100} />
    </NoSsr>
  );
}
