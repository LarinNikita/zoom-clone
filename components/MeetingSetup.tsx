'use client';

import React, { useEffect, useState } from 'react';
import {
  DeviceSettings,
  VideoPreview,
  useCall,
} from '@stream-io/video-react-sdk';

import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Button } from './ui/button';

type MeetingSetupProps = {
  setIsSetupCompleted: (value: boolean) => void;
};

const MeetingSetup = ({ setIsSetupCompleted }: MeetingSetupProps) => {
  const [isMicCamToggleOn, setIsMicCamToggleOn] = useState(false);

  const call = useCall();

  if (!call)
    throw new Error('useCall must be used within StreamCall component');

  useEffect(() => {
    if (isMicCamToggleOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToggleOn, call?.camera, call?.microphone]);

  return (
    <div className="flex-center h-screen w-full flex-col gap-3 text-white">
      <h1 className="text-2xl font-bold">Setup</h1>
      <VideoPreview />
      <div className="flex-center h-16 gap-3">
        <Switch
          id="MicCamMode"
          checked={isMicCamToggleOn}
          onCheckedChange={setIsMicCamToggleOn}
        />
        <Label htmlFor="MicCamMode" className="font-medium">
          Join with mic and camera {isMicCamToggleOn === true ? 'off' : 'on'}
        </Label>
        <DeviceSettings />
      </div>
      <Button
        className="rounded-md bg-green-500 px-4 py-2.5"
        size="lg"
        onClick={() => {
          call.join();
          setIsSetupCompleted(true);
        }}
      >
        Join meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
