import CategoryBar from '../home_page/CategoryBar'
import Banner from '../home_page/Banner'
import List from '../home_page/List'
import MoreItem from '../home_page/MoreItem'
import RightSide from '../home_page/RightSide'
import { useState } from 'react'

const Home = () => {
    const [category, setCategory] = useState("general")
    const [country, setCountry] = useState("id")
    const [headlineArticles, setHeadlineArticles] = useState([])
    return (
      <div>
        <div className='w-full mx-auto p-10'>
          <Banner setHeadlineArticles={setHeadlineArticles} />
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-8'>
              <CategoryBar setCategory={setCategory}/>
              <List category={category} headlineArticles={headlineArticles}/>
              <MoreItem headlineArticles={headlineArticles} />
            </div>
            <div className='col-md-4'>
              <RightSide country={country} setCountry={setCountry} headlineArticles={headlineArticles} />
            </div>
          </div>
        </div>
      </div>
    )
}

export default Home