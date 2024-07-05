function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center space-x-2 bg-dark-bg1">
      <span className="sr-only">Loading...</span>
      <div className="h-8 w-8 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
      <div className="h-8 w-8 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
      <div className="h-8 w-8 animate-bounce rounded-full bg-primary" />
    </div>
  );
}

export default Loading;
