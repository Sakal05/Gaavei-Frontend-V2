import { SparkLineChart } from "@mui/x-charts/SparkLineChart";

export default function Chart({data}: {data: number[]}) {
    return (
        <SparkLineChart data={data} height={100}/>
    )
}