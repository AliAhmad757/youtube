import { baseUrl, fetchApi } from '../Utility/fetchApi'
import { useEffect, useState } from 'react'
import { Box, Chip, Grid } from '@mui/material'
import { Data } from '../Utility/Constants'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Video from "../Components/Video"
import { Vortex } from 'react-loader-spinner';

export default function Home() {
  const [category, setCategory] = useState("Alan Walker")
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchVideo = async () => {
      const response = await fetchApi(`/?q=${category}`)
      setLoading(false)
      setData(response?.items)
    }

    fetchVideo()
  }, [category])

  const handleClick = (name) => {
    setCategory(name)
  }

  console.log(data)
  const slideLeft = () => {
    let slider = document.getElementById("scrollmenu")
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    let slider = document.getElementById("scrollmenu")
    slider.scrollLeft = slider.scrollLeft + 500
  }

  if (!data && loading) {
    return (
      <div className="center">
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />
      </div>
    )
  }

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <ChevronLeftIcon className='icon' onClick={slideLeft} />
        <div id='scrollmenu'>
          {Data?.map((item, idx) => {
            return (
              <Chip key={idx} className='' label={item} onClick={() => handleClick(item)} sx={{ mx: 1 }} />
            )
          })}
        </div>
        <ChevronRightIcon className='icon' onClick={slideRight} />
      </div>

      <Grid container spacing={3} mt={2}>
        {data && data.map((item, idx) => {
          return (
            <Video key={idx} {...item} />
          )
        })}
      </Grid>
    </>
  )
}
