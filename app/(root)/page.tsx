import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import RightSidebar from '@/components/ui/RightSidebar';

const Home = () => {
  const loggedIn = { firstName: 'Sam', lastName: 'Floyd', email: 'floyd.samuel.23@gmail.com' };
  
  return (
    <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={ loggedIn?.firstName  || 'Guest' }
              subtext="Access and manage your account and transactions efficiently"
            />

            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1250.35}
            />
          </header>
        </div>
        <RightSidebar user={loggedIn} transactions={[]} banks={[{ currentBalance: 123.50 }, { currentBalance: 500.25 }]}/>
    </section>
  )
}

export default Home;