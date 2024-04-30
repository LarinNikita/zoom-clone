import React from 'react';

type Props = {
  params: {
    id: string;
  };
};

const MeetingPageId = ({ params }: Props) => {
  return <div>Meeting Room #{params.id}</div>;
};

export default MeetingPageId;
