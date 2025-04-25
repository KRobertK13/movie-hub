import { Progress, Flex } from "@chakra-ui/react";
interface ProgressData {
  state: number;
}
const LoadingProgressBar = ({ state }: ProgressData) => {
  return (
    <Flex justify="center" align="center" marginY="10">
      <Progress.Root width="33%" max={20} value={state}>
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
    </Flex>
  );
};

export default LoadingProgressBar;
