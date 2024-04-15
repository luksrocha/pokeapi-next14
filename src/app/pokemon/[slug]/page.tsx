interface IPokemonDetailsPage {
    params: {
        slug: string;
    };
}

const PokemonDetailsPage = ({ params }: IPokemonDetailsPage) => {
    const { slug } = params;

    return <div>{slug}</div>;
};

export default PokemonDetailsPage;
