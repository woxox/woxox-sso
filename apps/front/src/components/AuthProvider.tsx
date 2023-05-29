import React from 'react';

import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { Roles } from 'types/role';

import userState from '@recoil/atoms/user';

interface PrivateRouterProps {
  children: React.ReactElement;
  roles?: Roles[];
}

const PrivateRouter: React.FC<PrivateRouterProps> = ({ children, roles }) => {
  const router = useRouter();
  const user = useRecoilValue(userState);
  console.log('user', user);

  if (!user || !user.id) {
    router.push('/login');
    return <div>로그인이 필요합니다</div>;
  }

  // const userRoles = user.roleGroup.roles.map((role) => role.name);
  // const userHasRoles = roles?.every((requireRole) => userRoles.includes(requireRole));
  // if (roles && userHasRoles === false) return <Navigate to="/" />;

  return children;
};

export default PrivateRouter;
