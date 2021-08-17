import { Chip, ChipLabel, Card, CardBody, CardTitle, CardText, CardFooterCTA, Button } from 'design-react-kit';
import { useCategories } from '../hooks/useCategories';


export const CategoriesCard = () => {
    const { categories } = useCategories();

    const renderCategories = () => {
        return categories.map((category) => {
            return (
                <span key={category.id}>
                    <Chip
                        color=""
                        disabled={false}
                        large
                        simple
                        tag="div"
                    >
                        <ChipLabel tag="span">
                            {category.title}
                        </ChipLabel>
                    </Chip>
                {' '}
                </span>
            );
        });
    };

    return (
        <Card
            className="card-bg card-big no-after"
            noWrapper={false}
            tag="div"
        >
            <CardBody tag="div">
                <CardTitle tag="h5">
                    Categories
                </CardTitle>
                <CardText tag="div">
                    {renderCategories()}
                </CardText>
                <CardFooterCTA>
                    <Button
                        color="primary"
                        icon={false}
                        outline
                        tag="button"
                    >
                        Add new category
                    </Button>
                </CardFooterCTA>
            </CardBody>
        </Card>
    );
};
