'use client';

import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';

import { useGetCallById } from '@/hooks/useGetCallById';

import Loader from '@/components/Loader';
import MeetingSetup from '@/components/MeetingSetup';
import MeetingRoom from '@/components/MeetingRoom';

type MeetingPageIdProps = {
  params: {
    id: string;
  };
};

const MeetingPageId = ({ params }: MeetingPageIdProps) => {
  const { user, isLoaded } = useUser();
  const [isSetupCompleted, setIsSetupCompleted] = useState(false);
  const { call, isCallLoading } = useGetCallById(params.id);

  if (!isLoaded || isCallLoading) return <Loader />;

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupCompleted ? (
            <MeetingSetup setIsSetupCompleted={setIsSetupCompleted} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default MeetingPageId;
