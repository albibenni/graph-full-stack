import * as React from 'react';
import ComposePanel from './ComposePanel';
import Tweet from './Tweet';

export interface TimelineProps {
  currentUserId: string;
  currentUserFavorites: string[];
}

const TWEETS = [
  {
    author: {
      name: 'Alb Bee',
      handle: 'albee',
      avatarUrl: 'http://localhost:3000/static/albeee.png',
      coverUrl: 'http://localhost:3000/static/beach.jpeg',
      createdAt: '2024-11-23T03:55:59.613Z',
      updatedAt: '2024-11-23T03:55:59.613Z',
      id: 'user-16ee50d0-e43c-4e95-8ae7-b02d086785f5',
    },
    body: 'Hey, check this out!',
    createdAt: '2024-11-23T03:55:59.613Z',
    updatedAt: '2024-11-23T03:55:59.613Z',
    id: 'tweet-97fa3005-a0ec-4e42-8f53-9b3cec7c8316',
    stats: { commentCount: 123, retweetCount: 456, favoriteCount: 789 },
  },
  {
    author: {
      name: 'Sheppard Dog',
      handle: 'doggy',
      avatarUrl: 'http://localhost:3000/static/shep.jpeg',
      coverUrl: 'http://localhost:3000/static/beach.jpeg',
      createdAt: '2024-11-23T03:55:59.612Z',
      updatedAt: '2024-11-23T03:55:59.612Z',
      id: 'user-895b3d36-8bdf-4c29-be10-7a5e7ff3287f',
    },
    body: "Check out ",
    createdAt: '2024-11-23T03:55:59.613Z',
    updatedAt: '2024-11-23T03:55:59.613Z',
    id: 'tweet-ccf7f922-f668-4da1-93a7-07adce2f0d80',
    stats: { commentCount: 123, retweetCount: 456, favoriteCount: 789 },
  },
];

const Timeline: React.FC<TimelineProps> = ({
  currentUserFavorites,
  currentUserId,
}) => {
  return (
    <div id="timeline">
      <ComposePanel currentUser={{ id: currentUserId }} />
      {TWEETS.map((t) => {
        const author = t.author;
        if (!author) throw new Error(`Tweet ${t.id} has no author!`);
        const isFavorited = currentUserFavorites.includes(t.id);

        const { stats, id } = t;
        const {
          commentCount = 0,
          favoriteCount = 0,
          retweetCount = 0,
        } = stats || {};
        const tweet = {
          id,
          isFavorited,
          author,
          commentCount,
          favoriteCount,
          retweetCount,
          createdAt: new Date(t.createdAt),
          message: t.body,
        };
        return <Tweet tweet={tweet} currentUserId={currentUserId} key={t.id} />;
      })}

      <footer>
        <i className="fab fa-twitter"></i>
        <button>Load More</button>
      </footer>
    </div>
  );
};

export default Timeline;
