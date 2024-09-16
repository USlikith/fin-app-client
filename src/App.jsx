// import { Grid2 } from '@mui/material'
// import { Divider, Stack } from '@mui/material'
import Stack from '@mui/material/Stack';
import './App.css'
import HorizontalBars from './componets/charts/barGraphs'
import PieChartWithCustomizedLabel from './componets/charts/piChart'
import ResponsiveAppBar from './componets/navbar/navbar'
import { Divider } from '@mui/material';




function App() {


  return (
    <>

      <ResponsiveAppBar />
      {/* <HorizontalBars />
      <PieChartWithCustomizedLabel /> */}
      <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2} sx={{ padding:"5px" }}>
        <HorizontalBars />
        <PieChartWithCustomizedLabel />
      </Stack>
    </>
  )
}

export default App
