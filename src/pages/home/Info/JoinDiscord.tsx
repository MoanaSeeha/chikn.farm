import React from "react";

import { Button } from '../../../components/Button'

import { useNavigate } from "react-router-dom";

const JoinDiscord = () => {
  const navigation = useNavigate();

  return (<div className="mt-40 max-w-[1400px] mx-auto">
    <h1 className="text-4xl text-[#df3f3d]">
      Join the community
    </h1>
    <div className=" text-white text-xl space-y-7">
      For the latest news, updates and access to pre-release content.  
    </div>
    <Button title="Join Our Discord" onClick={() => navigation('https://discord.gg/9znHkBYjra')}/>
  </div>)
}

export default JoinDiscord;