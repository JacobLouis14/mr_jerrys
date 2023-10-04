import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();

  return (
    <Html>
      <span>
        <p>{progress.toFixed(2)}%</p>
      </span>
    </Html>
  );
}

export default Loader;
