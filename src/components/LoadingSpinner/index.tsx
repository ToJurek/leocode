export const LoadingSpinner = () => (
  <div className="flex items-center justify-center space-x-2 animate-bounce py-8">
    <div
      className="w-8 h-8 bg-blue-400 rounded-full"
      data-testid="dot-element"
    />
    <div
      className="w-8 h-8 bg-green-400 rounded-full"
      data-testid="dot-element"
    />
    <div className="w-8 h-8 bg-black rounded-full" data-testid="dot-element" />
  </div>
);
