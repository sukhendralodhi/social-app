import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightbar/RightBar'
import SideBar from '../../components/sidebar/SideBar'
import TopBar from '../../components/topbar/topbar'
import './home.css'
const Home = () => {
  return (
    <>
      <TopBar />
      <div className="homeContainer flex w-full">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </>
  )
}

export default Home;