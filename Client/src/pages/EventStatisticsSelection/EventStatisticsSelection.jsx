
import Layout from "../../components/Navigation/Layout/Layout"
import SearchBar from "../../components/Navigation/SearchBar/SearchBar"
import StatsCard from "../../components/Cards/StatsCard"
import ImprovedNavbar from "../../components/Navigation/Navbar/ImprovedNavbar"


function EventStatisticsSelection() {

  return (
    <>
      <Layout>
        <SearchBar />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-16 mb-5 ">
          <StatsCard />
          <StatsCard />
          <StatsCard />
          <StatsCard />
          <StatsCard />
        </div>
      </Layout>
      <ImprovedNavbar />
    </>
  )
}

export default EventStatisticsSelection
