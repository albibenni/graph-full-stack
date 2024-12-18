import Db from './db';

export async function seedDb(db: Db) {
  if (db.getAllTrends().length === 0) {
    await db.createHashtagTrend({ hashtag: 'typescript', tweetCount: 9001 });
    await db.createTopicTrend(
      { topic: 'GraphQL', tweetCount: 12345 },
      {
        description: 'Launch of new full stack TS course with graphql',
        imageUrl: 'http://localhost:3000/static/graphql-logo.png',
        title: 'GraphQL',
      }
    );
    await db.createTopicTrend(
      { topic: 'Pointless Suggestions', tweetCount: 999 },
      {
        description: "It looks like you're trying to write a letter...",
        imageUrl: 'http://localhost:3000/static/clippy-logo.jpeg',
        title: 'clippy',
      }
    );
    await db.write();
  }
  if (db.getAllSuggestions().length === 0) {
    await db.createSuggestion({
      name: 'TypeScript Project',
      handle: 'TypeScript',
      avatarUrl: 'http://localhost:3000/static/ts-logo.png',
      reason: 'Because you follow @student',
    });
    await db.createSuggestion({
      name: 'jQuery',
      handle: 'jquery',
      avatarUrl: 'http://localhost:3000/static/jquery-logo.jpeg',
      reason: 'Because you follow @AlbBee',
    });
    await db.createSuggestion({
      name: 'GitHub',
      handle: 'github',
      avatarUrl: 'http://localhost:3000/static/github-logo.jpeg',
      reason: 'Because you follow @doggy',
    });
    await db.createSuggestion({
      name: 'Microsoft',
      handle: 'ms',
      avatarUrl: 'http://localhost:3000/static/msft-logo.png',
      reason: 'Because you follow @doggy',
    });
    await db.write();
  }
  if (db.getAllUsers().length === 0) {
    const [_student, alb, corgi, cat, shep] = [
      await db.createUser({
        name: 'Stu Dent',
        handle: 'student',
        avatarUrl: 'http://localhost:3000/static/egg.jpeg',
        coverUrl: 'http://localhost:3000/static/beach.jpeg',
      }),
      await db.createUser({
        name: 'Alb Bee',
        handle: 'albee',
        avatarUrl: 'http://localhost:3000/static/albeee.jpeg',
        coverUrl: 'http://localhost:3000/static/beach.jpeg',
      }),
      await db.createUser({
        name: 'Corgi Fluff',
        handle: 'corgi',
        avatarUrl: 'http://localhost:3000/static/corgi.jpeg',
        coverUrl: 'http://localhost:3000/static/beach.jpeg',
      }),
      await db.createUser({
        name: 'Cat ONine Tails',
        handle: 'cat',
        avatarUrl: 'http://localhost:3000/static/cat.jpeg',
        coverUrl: 'http://localhost:3000/static/beach.jpeg',
      }),
      await db.createUser({
        name: 'Sheppard Dog',
        handle: 'doggy',
        avatarUrl: 'http://localhost:3000/static/shep.jpeg',
        coverUrl: 'http://localhost:3000/static/beach.jpeg',
      }),
    ];

    const [tweet1, tweet2, tweet3, tweet4] = [
      await db.createTweet({
        userId: shep.id,
        message:
          'Hey, check this out!',
      }),
      await db.createTweet({
        userId: cat.id,
        message:
          "Check out AlbBee's story ",
      }),
      await db.createTweet({
        userId: corgi.id,
        message:
          `@${alb.handle}I'm having trouble logging into x. This is the captcha I'm being asked to solve. Seems a bit challenging http://localhost:3000/static/captcha-1.jpg `,
      }),
      await db.createTweet({
        userId: cat.id,
        message: `@${corgi.handle} I just deployed a new version of the UI. Mind trying again?`,
      }),
      await db.createTweet({
        userId: corgi.id,
        message: `@${shep.handle} I'm still having trouble with the login captchas. Am I supposed to take a class before solving this one? http://localhost:3000/static/captcha-4.jpg`,
      }),
    ];
    await db.createFavorite({ userId: shep.id, tweetId: tweet2.id });
    await db.createFavorite({ userId: shep.id, tweetId: tweet4.id });
    await db.createFavorite({ userId: cat.id, tweetId: tweet2.id });
    await db.createFavorite({ userId: cat.id, tweetId: tweet4.id });
    await db.createFavorite({ userId: alb.id, tweetId: tweet1.id });
    await db.createFavorite({ userId: alb.id, tweetId: tweet3.id });
    await db.createFavorite({ userId: alb.id, tweetId: tweet4.id });
    await db.createFavorite({ userId: corgi.id, tweetId: tweet2.id });
    await db.createFavorite({ userId: corgi.id, tweetId: tweet4.id });
  }
}
