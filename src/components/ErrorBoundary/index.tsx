import React, { Component } from "react";
import NotFoundImage from "../../assets/images/Error.png";

const ErrorPage = () => {
  return (
    <div className="w-screen h-screen bg-gray-300 flex flex-col justify-center items-center">
      <p className="text-4xl mb-4 text-gray-800">Something went wrong</p>
      <img src={NotFoundImage} alt="error-page" className="w-1/4" />
      <p className="p-2 text- mt-4 border-gray-600 text-gray-800">
        Please try reloading the app
      </p>
    </div>
  );
};

export class ErrorBoundary extends Component {
  state = {
    error: "",
    errorInfo: "",
    hasError: false,
  };

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error({ error, errorInfo });
    this.setState({ errorInfo });
  }

  render() {
    const { hasError } = this.state;

    if (hasError) return <ErrorPage />;

    return this.props.children;
  }
}

export default ErrorBoundary;
