import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center terminal-card max-w-md w-full">
        <div className="font-terminal text-xl text-muted-foreground mb-4">
          <span className="text-primary">$</span> cat error.log
        </div>
        
        <h1 className="font-pixel text-4xl text-primary text-glow-strong mb-4">
          404
        </h1>
        
        <p className="font-terminal text-xl text-muted-foreground mb-2">
          <span className="text-primary">&gt;</span> ERROR: Page not found
        </p>
        
        <p className="font-terminal text-lg text-muted-foreground mb-8">
          The requested resource does not exist on this server.
        </p>
        
        <Link
          to="/"
          className="inline-block font-terminal text-lg px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
        >
          [ Return Home ]
        </Link>
        
        <div className="mt-6 font-terminal text-primary">
          <span className="cursor-blink">_</span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
