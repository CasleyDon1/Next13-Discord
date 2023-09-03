import { redirect } from 'next/navigation';

import { initialProfile } from '@/lib/initial-profile';
import { db } from '@/lib/db';

const SetupPage = async () => {

const profile = await initialProfile();

const server = await db.server.findFirst({
  where: {
    members: {
      some: {
        profile: profile.id
      }
    }
  }
}); 

if (server) {
  return redirect(`/servers/${server.id}`);0
}


  return(
    <div>Create a Server</div>
  )
}

export default SetupPage;
