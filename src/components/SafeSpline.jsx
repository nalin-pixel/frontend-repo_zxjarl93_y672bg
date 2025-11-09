import React from 'react';
import Spline from '@splinetool/react-spline';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error) {
    // eslint-disable-next-line no-console
    console.error('SafeSpline error:', error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(12,20,36,0.6),rgba(12,20,36,0.9))]" />
      );
    }
    return this.props.children;
  }
}

export default function SafeSpline({ scene }) {
  return (
    <ErrorBoundary>
      <Spline scene={scene} style={{ width: '100%', height: '100%' }} />
    </ErrorBoundary>
  );
}
