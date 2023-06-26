import { Button, Card, createStyles, Group, Image, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },
}));

interface GameCardProps {
  game: {
    id: number;
    name: string;
    cover: {
      id: number;
      url: string;
    };
    genres: {
      id: number;
      name: string;
    }[];
    platforms: {
      id: number;
      name: string;
    }[];
    url: string;
    rating: number;
  };
}

const GameCard = ({ game }: GameCardProps) => {
  const { classes } = useStyles();
  return (
    <Card radius="md" className="h-[250px] max-w-md bg-blue-50 py-0">
      <Group noWrap spacing={0} className="">
        <div className="pt-4">
          <Image src={game.cover.url} height={210} />
        </div>
        <div className="pl-3 pt-4">
          <Button size="md" className="w-64 bg-yellow-400 hover:bg-yellow-500">
            このゲームを取得
          </Button>
          <Text className={classes.title} mt="xs" mb="md">
            {game.name}
          </Text>
          <Text className={classes.title} mt="xs" mb="md">
            {`Rating: ${game.rating}`}
          </Text>
          <div className="flex space-x-2">
            {game.genres.map((genre) => (
              <Text key={genre.id} color="dimmed" weight={700} size="xs">
                #{genre.name}
              </Text>
            ))}
          </div>
          <div className="flex space-x-2">
            {game.platforms.map((platform) => (
              <Text key={platform.id} color="dimmed" weight={700} size="xs">
                #{platform.name}
              </Text>
            ))}
          </div>
          <a
            href={game.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-gray-400 no-underline"
          >
            ゲームの詳細を見る
          </a>
        </div>
      </Group>
    </Card>
  );
};

export default GameCard;
