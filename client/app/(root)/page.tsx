'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Loader2 } from 'lucide-react';
import { useStateContext } from '@/context';
import FAQ from '@/components/FAQ';
import About from '@/components/About';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { connectWallet, address } = useStateContext();

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      // Your submit logic here
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          Welcome
        </header>
        <About />
        <FAQ />

        RECENT   

        <div className="flex flex-col gap-4">
          <Button onClick={connectWallet} type="button" disabled={isLoading} className="form-btn">
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" /> &nbsp;
                Loading...
              </>
            ) : address ? 'Connected' : 'Connect'}
          </Button>

          {address && (
            <div>
              <p>Connected Address: {address}</p>
            </div>
          )}
        </div>    
      </div>
    </section>
  );
};

export default Home;
