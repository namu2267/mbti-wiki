import { useMediaQuery } from 'react-responsive';

export default function Desktop({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return isDesktop ? children : null;
}

export function Tablet({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  return isTablet ? children : null;
}

export function Mobile({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
}

// mobile이 아닐 때만 출력되는 컴포넌트
export function Default({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
}
