import { ActionTypes } from '../../actions';
import { PopularDispatchTypes } from '../../actions/popularActions/popularActions.types';
import { IPopularDefaultState } from './popularReducer.types';

const defaultState: IPopularDefaultState = {
  streams: [],
  tvShows: [],
  trending: [],
  upcoming: [],
  myList: [
    {
      adult: false,
      backdrop_path: '/hYC6uetTLSqbLZ3dFY0IfXWhl93.jpg',
      first_air_date: '1999-10-20',
      genre_ids: [10759, 35, 16],
      id: 37854,
      media_type: 'tv',
      name: 'One Piece',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: 'ワンピース',
      overview:
        'Years ago, the fearsome Pirate King, Gol D. Roger was executed leaving a huge pile of treasure and the famous "One Piece" behind. Whoever claims the "One Piece" will be named the new King of the Pirates. Monkey D. Luffy, a boy who consumed a "Devil Fruit," decides to follow in the footsteps of his idol, the pirate Shanks, and find the One Piece. It helps, of course, that his body has the properties of rubber and that he\'s surrounded by a bevy of skilled fighters and thieves to help him along the way. Luffy will do anything to get the One Piece and become King of the Pirates!',
      popularity: 119.543,
      poster_path: '/fcXdJlbSdUEeMSJFsXKsznGwwok.jpg',
      vote_average: 8.766,
      vote_count: 3147,
    },
    {
      adult: false,
      backdrop_path: '/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg',
      genre_ids: [28, 878, 27],
      id: 766507,
      media_type: 'movie',
      original_language: 'en',
      original_title: 'Prey',
      overview:
        'When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.',
      popularity: 7870.6,
      poster_path: '/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg',
      release_date: '2022-08-02',
      title: 'Prey',
      video: false,
      vote_average: 8.1,
      vote_count: 2951,
    },
    {
      adult: false,
      backdrop_path: '/k2G4WqGiT60K9yJnPh4K6VLnl3A.jpg',
      genre_ids: [28, 12, 14],
      id: 639933,
      media_type: 'movie',
      original_language: 'en',
      original_title: 'The Northman',
      overview:
        "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.",
      popularity: 966.489,
      poster_path: '/8p9zXB7M78nZpm215zHfqpknMeM.jpg',
      release_date: '2022-04-07',
      title: 'The Northman',
      video: false,
      vote_average: 7.2,
      vote_count: 2207,
    },
    {
      adult: false,
      backdrop_path: '/rLo9T9jEg67UZPq3midjLnTUYYi.jpg',
      genre_ids: [10402, 18, 36],
      id: 614934,
      media_type: 'movie',
      original_language: 'en',
      original_title: 'Elvis',
      overview:
        'The life story of Elvis Presley as seen through the complicated relationship with his enigmatic manager, Colonel Tom Parker.',
      popularity: 798.678,
      poster_path: '/qBOKWqAFbveZ4ryjJJwbie6tXkQ.jpg',
      release_date: '2022-06-22',
      title: 'Elvis',
      video: false,
      vote_average: 7.928,
      vote_count: 1140,
    },
    {
      adult: false,
      backdrop_path: '/ufyH30kxQFWul49D9kw8n4omL1c.jpg',
      first_air_date: '2019-07-25',
      genre_ids: [10765, 10759],
      id: 76479,
      media_type: 'tv',
      name: 'The Boys',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'The Boys',
      overview:
        'A group of vigilantes known informally as “The Boys” set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty.',
      popularity: 974.579,
      poster_path: '/stTEycfG9928HYGEISBFaG1ngjM.jpg',
      vote_average: 8.471,
      vote_count: 7079,
    },
    {
      backdrop_path: '/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
      first_air_date: '2016-07-15',
      genre_ids: [18, 10765, 9648],
      id: 66732,
      media_type: 'tv',
      name: 'Stranger Things',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Stranger Things',
      overview:
        'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.',
      popularity: 1330.003,
      poster_path: '/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
      vote_average: 8.6,
      vote_count: 13048,
    },
    {
      backdrop_path: '/eqhKMZTLcieAvoH6CBqknTTfNby.jpg',
      first_air_date: '2022-08-05',
      genre_ids: [10765, 18],
      id: 90802,
      media_type: 'tv',
      name: 'The Sandman',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'The Sandman',
      overview:
        'After years of imprisonment, Morpheus — the King of Dreams — embarks on a journey across worlds to find what was stolen from him and restore his power.',
      popularity: 2627.117,
      poster_path: '/q54qEgagGOYCq5D1903eBVMNkbo.jpg',
      vote_average: 8.2,
      vote_count: 479,
    },
    {
      backdrop_path: '/zIRssaKBGBitHXo4h680IGCJFIg.jpg',
      first_air_date: '2022-07-14',
      genre_ids: [18, 10765],
      id: 108296,
      media_type: 'tv',
      name: 'Resident Evil',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Resident Evil',
      overview:
        "Nearly three decades after the discovery of the T-virus, an outbreak reveals the Umbrella Corporation's dark secrets. Based on the horror franchise.",
      popularity: 511.021,
      poster_path: '/rmLvn4w4HMdxobPkjmIqrhJiXDO.jpg',
      vote_average: 6.1,
      vote_count: 244,
    },
    {
      adult: false,
      backdrop_path: '/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg',
      genre_ids: [14, 28, 12],
      id: 453395,
      media_type: 'movie',
      original_language: 'en',
      original_title: 'Doctor Strange in the Multiverse of Madness',
      overview:
        'Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.',
      popularity: 1820.595,
      poster_path: '/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg',
      release_date: '2022-05-04',
      title: 'Doctor Strange in the Multiverse of Madness',
      video: false,
      vote_average: 7.5,
      vote_count: 5395,
    },
    {
      adult: false,
      backdrop_path: '/3VQj6m0I6gkuRaljmhNZl0XR3by.jpg',
      genre_ids: [16, 12, 35, 14],
      id: 585511,
      media_type: 'movie',
      original_language: 'en',
      original_title: 'Luck',
      overview:
        'Suddenly finding herself in the never-before-seen Land of Luck, the unluckiest person in the world must unite with the magical creatures there to turn her luck around.',
      popularity: 2238.004,
      poster_path: '/1HOYvwGFioUFL58UVvDRG6beEDm.jpg',
      release_date: '2022-08-05',
      title: 'Luck',
      video: false,
      vote_average: 8.2,
      vote_count: 493,
    },
    {
      adult: false,
      media_type: 'movie',
      backdrop_path: '/p1F51Lvj3sMopG948F5HsBbl43C.jpg',
      genre_ids: [28, 12, 14],
      id: 616037,
      original_language: 'en',
      original_title: 'Thor: Love and Thunder',
      overview:
        'After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Relatively Mighty Girl Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.',
      popularity: 6472.862,
      poster_path: '/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg',
      release_date: '2022-07-06',
      title: 'Thor: Love and Thunder',
      video: false,
      vote_average: 6.781,
      vote_count: 1988,
    },
    {
      adult: false,
      backdrop_path: '/Aa9TLpNpBMyRkD8sPJ7ACKLjt0l.jpg',
      first_air_date: '2022-08-21',
      genre_ids: [18, 10759, 10765],
      id: 94997,
      media_type: 'tv',
      name: 'House of the Dragon',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'House of the Dragon',
      overview:
        'The prequel series finds the Targaryen dynasty at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires—real and imagined—crumble from such heights. In the case of the Targaryens, their slow fall begins almost 193 years before the events of Game of Thrones, when King Viserys Targaryen breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.',
      popularity: 1825.249,
      poster_path: '/z2yahl2uefxDCl0nogcRBstwruJ.jpg',
      vote_average: 8.943,
      vote_count: 281,
    },
  ],
  indexPosition: 0,
};

const popularReducer = (state = defaultState, action: PopularDispatchTypes) => {
  switch (action.type) {
    case ActionTypes.GET_POPULAR_STREAMS:
      return {
        ...state,
        streams: action.payload,
      };
    case ActionTypes.GET_POPULAR_TV_SHOWS:
      return {
        ...state,
        tvShows: action.payload,
      };
    case ActionTypes.GET_TRENDING:
      return {
        ...state,
        trending: action.payload,
      };
    case ActionTypes.GET_MEDIA_UPCOMING:
      return {
        ...state,
        upcoming: action.payload,
      };
    case ActionTypes.GET_MY_MEDIA_LIST:
      return {
        ...state,
        myList: action.payload,
      };
    case ActionTypes.RANDOM_NUMBER:
      return {
        ...state,
        indexPosition: action.payload,
      };
    default:
      return state;
  }
};

export default popularReducer;
