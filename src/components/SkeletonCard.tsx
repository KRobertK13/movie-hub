import {
  Flex,
  Skeleton,
  Badge,
  SkeletonText,
  Stack,
  Card,
} from "@chakra-ui/react";
const SkeletonCard = () => {
  return (
    <Card.Root>
      <Skeleton height="300px" loading={true}></Skeleton>
      <Card.Body>
        <SkeletonText height="200" />
        <Stack width="full">
          <SkeletonText noOfLines={2} />
          <SkeletonText marginY={3} width="30%" noOfLines={1} />
          <Flex gap="1" wrap="wrap" justify="left">
            <Skeleton asChild loading={true}>
              <Badge>Select</Badge>
            </Skeleton>
            <Skeleton asChild loading={true}>
              <Badge>Select</Badge>
            </Skeleton>
            <Skeleton asChild loading={true}>
              <Badge>Select</Badge>
            </Skeleton>
          </Flex>
          <Skeleton
            marginTop="5"
            height="10"
            width="20"
            loading={true}
          ></Skeleton>
        </Stack>
      </Card.Body>
    </Card.Root>
  );
};

export default SkeletonCard;
