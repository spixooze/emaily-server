import React from 'react'
import { Link } from 'react-router-dom'

import RoundButton from './RoundButton'

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Link to="/surveys/new">
        <RoundButton icon="add" />
      </Link>
    </div>
  )
}

export default Dashboard
