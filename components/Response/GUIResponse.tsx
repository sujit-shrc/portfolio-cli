"use client";

import { useEffect } from 'react';
import { redirect } from 'next/navigation'

const GuiResponse: React.FC = () => {

  useEffect(() => {
    // Redirecting to my GUI portfolio URL
    redirect("https://www.nucleus-dev.me")
  }, []);

  return (
    <div>
      Redirecting to GUI portfolio...
    </div>
  );
};

export default GuiResponse;
