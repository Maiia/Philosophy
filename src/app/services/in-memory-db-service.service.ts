import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})

// export class InMemoryDbServiceService {
export class InMemoryDbServiceService implements InMemoryDbService {
  createDb() {
    const questions = {
      question_1: {
        question_text: 'Question 1',
        question_type: 'checkbox',
        questions: [
          {
            index: 'question_2',
            answer_text: 'Answer 2'
          },
          {
            index: 'question_3',
            answer_text: 'Answer 3'
          }
        ]
      },
      question_2_question_3: {
        question_text: 'Question 2 and 3',
        question_type: 'radio',
        questions: [
          {
            index: 'question_4',
            answer_text: 'Answer 4'
          },
          {
            index: 'question_5',
            answer_text: 'Answer 5'
          }
        ]
      },
      question_2: {
        question_text: 'Question 2',
        question_type: 'radio',
        questions: [
          {
            index: 'question_4',
            answer_text: 'Answer 4'
          },
          {
            index: 'question_5',
            answer_text: 'Answer 5'
          }
        ]
      },
      question_3: {
        question_text: 'Question 3',
        question_type: 'checkbox',
        questions: [
          {
            index: 'question_6',
            answer_text: 'Answer 6'
          },
          {
            index: 'question_7',
            answer_text: 'Answer 7'
          }
        ]
      },
      question_6_question_7: {
        question_text: 'Question 6 and 7',
        question_type: 'radio',
        questions: [
          {
            index: 'question_4',
            answer_text: 'Answer 4'
          },
          {
            index: 'question_5',
            answer_text: 'Answer 5'
          }
        ]
      },
      question_4: {
        question_text: 'Question 4',
        question_type: 'radio',
        questions: [
          {
            index: 'question_8',
            answer_text: 'Answer 8'
          },
          {
            index: 'question_9',
            answer_text: 'Answer 9'
          }
        ]
      },
      question_5: {
        question_text: 'Question 5',
        question_type: 'checkbox',
        questions: [
          {
            index: 'question_9',
            answer_text: 'Answer 9'
          },
          {
            index: 'question_10',
            answer_text: 'Answer 10'
          }
        ]
      },
      question_9_question_10: {
        question_text: 'Question 9 and 10',
        question_type: 'radio',
        questions: [
          {
            index: 'question_6',
            answer_text: 'Answer 6'
          },
          {
            index: 'question_7',
            answer_text: 'Answer 7'
          }
        ]
      },
      question_6: {
        question_text: 'Question 6',
        question_type: 'radio',
        questions: [
          {
            index: 'question_10',
            answer_text: 'Answer 10'
          },
          {
            index: 'question_11',
            answer_text: 'Answer 11'
          }
        ]
      },
      question_7: {
        question_text: 'Question 7',
        question_type: 'checkbox',
        questions: [
          {
            index: 'question_11',
            answer_text: 'Answer 11'
          },
          {
            index: 'question_12',
            answer_text: 'Answer 12'
          }
        ]
      },
      question_11_question_12: {
        question_text: 'Question 11 and 12',
        question_type: 'radio',
        questions: [
          {
            index: 'question_8',
            answer_text: 'Answer 8'
          },
          {
            index: 'question_9',
            answer_text: 'Answer 9'
          }
        ]
      },
      question_8: {
        question_text: 'Question 8',
        question_type: 'radio',
        questions: [
          {
            index: 'question_13',
            answer_text: 'Answer 13'
          },
          {
            index: 'question_14',
            answer_text: 'Answer 14'
          }
        ]
      },
      question_9: {
        question_text: 'Question 9',
        question_type: 'radio',
        questions: [
          {
            index: 'question_14',
            answer_text: 'Answer 14'
          },
          {
            index: 'question_15',
            answer_text: 'Answer 15'
          }
        ]
      },
      question_10: {
        question_text: 'Question 10',
        question_type: 'checkbox',
        questions: [
          {
            index: 'question_15',
            answer_text: 'Answer 15'
          },
          {
            index: 'question_16',
            answer_text: 'Answer 16'
          }
        ]
      },
      question_15_question_16: {
        question_text: 'Question 15 and 16',
        question_type: 'radio',
        questions: [
          {
            index: 'question_11',
            answer_text: 'Answer 11'
          },
          {
            index: 'question_12',
            answer_text: 'Answer 12'
          }
        ]
      },
      question_11: {
        question_text: 'Question 11',
        question_type: 'radio',
        questions: [
          {
            index: 'question_16',
            answer_text: 'Answer 16'
          },
          {
            index: 'question_17',
            answer_text: 'Answer 17'
          }
        ]
      },
      question_12: {
        question_text: 'Question 12',
        question_type: 'radio',
        questions: [
          {
            index: 'question_17',
            answer_text: 'Answer 17'
          },
          {
            index: 'question_18',
            answer_text: 'Answer 18'
          }
        ]
      },
      question_13: {
        question_text: 'Question 13',
        question_type: 'radio',
        questions: [
          {
            index: 'question_19',
            answer_text: 'Answer 19'
          },
          {
            index: 'question_20',
            answer_text: 'Answer 20'
          }
        ]
      },
      question_14: {
        question_text: 'Question 14',
        question_type: 'radio',
        questions: [
          {
            index: 'question_20',
            answer_text: 'Answer 20'
          },
          {
            index: 'question_21',
            answer_text: 'Answer 21'
          },
          {
            index: 'question_22',
            answer_text: 'Answer 22'
          }
        ]
      }
    };
    const questions_result = {
      question_15: {
        result_heading: 'Unbelievable Work!',
        result_description: 'Spending so much time with like-minded people has been great for the harmony in your life, but it ' +
          'hasn\'t been too intellectually stimulating. Today, take some time to get into a scholarly debate -- or at least eavesdrop ' +
          'on a conversation you would never have yourself. You should definitely not go out looking for a fight, but it would not be a ' +
          'bad idea to step out of your comfort zone and experience a little bit of conflict right now. It will strengthen your resolve.'
      },
      question_16: {
        result_heading: 'Way To Go!',
        result_description: 'When a surge of energy enters you today, use it to help others. Instead of diving into a fun project or a ' +
          'favorite hobby (or hitting the mall), find out who needs some help around the house. An older family member will be very ' +
          'appreciative of the extra pair of hands. And you\'ll feel good because you\'ll know that you have the right priorities. ' +
          'Giving to others enables you to connect with others, which is something that you should never take for granted.'
      },
      question_17: {
        result_heading: 'You\'ve Outdone Yourself!',
        result_description: 'You can never try too hard to express yourself clearly -- and clarity is especially important right now, ' +
          'so you need to put extra effort into making sure that you\'re saying what you mean (and meaning what you say) and that ' +
          'people understand you. If you don\'t, conflicts are a real danger. Double-check any emails you send today, and think ' +
          'through conversations before you open your mouth to speak. Being especially careful today will pay off big in the long run.'
      },
      question_18: {
        result_heading: 'Amazing Effort!',
        result_description: 'This is a day to use however you wish -- like the middle square on a bingo card, it can make you a winner ' +
          'in several different ways. But the universe doesn\'t hand these days out so you can waste them on housework or reorganizing ' +
          'your filing cabinet. Cherish this time, and use it to get closer to people around you. Spend the day sharing philosophies ' +
          'and expressing your feelings. Whether they are good or bad, your inner thoughts ought to be heard.'
      },
      question_19: {
        result_heading: 'Marvelous!',
        result_description: 'This month\'s most active phase is finally coming to a close, and you should be ready to slow down the pace ' +
          'and crawl into your own head for a while. This isn\'t necessarily a time for deep self-examination. But it\'s a very good day ' +
          'to do any research you need to do. Complicated charts, abstruse facts and myriad details will all make sense to you ' +
          'instantly. And if you listen to your instincts while you\'re making your decisions, you are sure to make wise ones.'
      },
      question_20: {
        result_heading: 'Two Thumbs Up!',
        result_description: 'The good news is that you will have a very relaxing, enjoyable day. The bad news is that this day can\'t ' +
          'last forever -- and that you won\'t get a lot of work done today. As long as you resign yourself to an unproductive day, ' +
          'you will be able to lay down any burdens you\'ve put on yourself. Admit to yourself and to the powers that be that no ' +
          'headway will be made today. Chances are, this little delay in the schedule won\'t cause anyone too much stress.'
      },
      question_21: {
        result_heading: 'You\'ve Got It!',
        result_description: 'Life doesn\'t always go the way you want it to, and you don\'t always get what you wish for. Today you will ' +
          'have to bravely face these truths. In terms of a romantic pursuit, don\'t get upset if things aren\'t progressing at the pace ' +
          'you\'d like. There are two people here, and you both have to balance what you want with what the other person is willing to ' +
          'give. Apply some patience to this situation, and spend some time away from the person if you\'re feeling frustrated.'
      },
      question_22: {
        result_heading: 'Outstanding Performance!',
        result_description: 'Your imagination, your dreams and even your fantasies are extremely crucial today. Apply your creative mind ' +
          'to some suspicions you\'ve been having lately. Cook up a theory or two about what\'s been going on, and chances are excellent ' +
          'that you will be right on the money -- a conversation with a friend will prove that later today. Don\'t be discouraged by an ' +
          'admission of guilt. Instead, take this as a sign that your intuition is more on target than ever.'
      },
    };
    const articles = [
      {
        id: 1,
        category: 'music',
        title: 'What Your Music Preference Says About You and Your Personality',
        author_id: 1,
        date: 'Fri Dec 29 2017 00:00:00 GMT+0200',
        article_img: 'assets/thumbs/featured/featured-guitarman.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
          'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
          'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
          'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
          'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
          'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
      },
      {
        id: 2,
        category: 'management',
        title: 'The Pomodoro Technique Really Works',
        author_id: 2,
        date: 'Fri Dec 27 2017 00:00:00 GMT+0200',
        article_img: 'assets/thumbs/featured/featured-watch.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
          'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
          'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
          'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
          'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
          'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
      },
      {
        id: 3,
        category: 'lifestyle',
        title: 'Throwback To The Good Old Days',
        author_id: 3,
        date: 'Fri Dec 21 2017 00:00:00 GMT+0200',
        article_img: 'assets/thumbs/featured/featured-beetle.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
          'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
          'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
          'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
          'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
          'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
      }
    ];
    const blog = [
      {
        id: 1,
        visited: 142,
        tags: ['design', 'photography'],
        title: 'Just a Standard Format Post',
        author_id: 1,
        date: 'Fri September 15 2018 00:00:00 GMT+0200',
        blog_img_small: 'assets/thumbs/masonry/lamp-400.jpg',
        blog_img_big: 'assets/thumbs/masonry/lamp-800.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
          'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
          'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
          'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
          'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
          'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
      },
      {
        id: 2,
        visited: 42,
        tags: ['family', 'photography'],
        title: 'Key Benefits Of Family Photography',
        author_id: 2,
        date: 'Fri September 10 2018 00:00:00 GMT+0200',
        blog_img_small: 'assets/thumbs/masonry/tulips-400.jpg',
        blog_img_big: 'assets/thumbs/masonry/tulips-800.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
          'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
          'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
          'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
          'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
          'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
      },
      {
        id: 3,
        visited: 1142,
        tags: ['family', 'relationship'],
        title: 'Create Meaningful Family Moments',
        author_id: 3,
        date: 'Fri August 10 2018 00:00:00 GMT+0200',
        blog_img_small: 'assets/thumbs/masonry/cookies-400.jpg',
        blog_img_big: 'assets/thumbs/masonry/cookies-800.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
          'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
          'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
          'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
          'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
          'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
      },
      {
        id: 4,
        visited: 12,
        tags: ['travel', 'vacation'],
        title: 'Planning Your First Trip to Sydney',
        author_id: 1,
        date: 'Fri August 10 2018 00:00:00 GMT+0200',
        blog_img_small: 'assets/thumbs/masonry/wheel-400.jpg',
        blog_img_big: 'assets/thumbs/masonry/wheel-800.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
          'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
          'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
          'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
          'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
          'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
      },
      {
        id: 5,
        visited: 1424,
        tags: ['cooking', 'health'],
        title: 'No Sugar Oatmeal Cookies',
        author_id: 2,
        date: 'Fri July 10 2018 00:00:00 GMT+0200',
        blog_img_small: 'assets/thumbs/masonry/shutterbug-400.jpg',
        blog_img_big: 'assets/thumbs/masonry/shutterbug-800.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
          'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
          'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
          'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
          'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
          'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
      },
      {
        id: 6,
        visited: 1242,
        tags: ['work', 'management'],
        title: 'Workspace Design Trends and Ideas',
        author_id: 3,
        date: 'Fri June 10 2018 00:00:00 GMT+0200',
        blog_img_small: 'assets/thumbs/masonry/gallery/gallery-1-400.jpg',
        blog_img_big: 'assets/thumbs/masonry/gallery/gallery-1-800.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
          'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
          'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
          'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
          'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
          'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
      },
      {
        id: 7,
        visited: 1429,
        tags: ['lifestyle'],
        title: 'Throwback To The Good Old Days',
        author_id: 1,
        date: 'Fri June 10 2018 00:00:00 GMT+0200',
        blog_img_small: 'assets/thumbs/masonry/guitarman-400.jpg',
        blog_img_big: 'assets/thumbs/masonry/guitarman-800.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
          'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
          'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
          'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
          'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
          'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
      },
      {
        id: 8,
        visited: 2142,
        tags: ['health'],
        title: '10 Interesting Facts About Caffeine',
        author_id: 2,
        date: 'Fri May 8 2018 00:00:00 GMT+0200',
        blog_img_small: 'assets/thumbs/masonry/jump-400.jpg',
        blog_img_big: 'assets/thumbs/masonry/jump-800.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
          'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
          'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
          'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
          'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
          'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
      },
      {
        id: 9,
        visited: 143,
        tags: ['health', 'lifestyle'],
        title: 'Visiting Theme Parks Improves Your Health',
        author_id: 3,
        date: 'Fri May 4 2018 00:00:00 GMT+0200',
        blog_img_small: 'assets/thumbs/masonry/fuji-400.jpg',
        blog_img_big: 'assets/thumbs/masonry/fuji-800.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
          'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
          'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
          'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
          'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
          'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
      },
      {
        id: 10,
        visited: 542,
        tags: ['music', 'lifestyle'],
        title: 'What Your Music Preference Says About You and Your Personality',
        author_id: 1,
        date: 'Fri April 29 2018 00:00:00 GMT+0200',
        blog_img_small: 'assets/thumbs/masonry/sydney-400.jpg',
        blog_img_big: 'assets/thumbs/masonry/sydney-800.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
          'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
          'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
          'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
          'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
          'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
      },
      {
        id: 11,
        visited: 742,
        tags: ['health'],
        title: '100 Facts About Tea',
        author_id: 2,
        date: 'Fri March 23 2018 00:00:00 GMT+0200',
        blog_img_small: 'assets/thumbs/masonry/beetle-400.jpg',
        blog_img_big: 'assets/thumbs/masonry/beetle-800.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
          'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
          'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
          'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
          'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
          'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
      },
      {
        id: 12,
        visited: 1642,
        tags: ['health', 'lifestyle'],
        title: 'About clean water',
        author_id: 3,
        date: 'Fri February 19 2018 00:00:00 GMT+0200',
        blog_img_small: 'assets/thumbs/masonry/lamp-400.jpg',
        blog_img_big: 'assets/thumbs/masonry/lamp-800.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
          'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
          'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
          'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
          'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
          'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
      },
      {
        id: 13,
        visited: 1222,
        tags: ['music', 'lifestyle'],
        title: 'Who Likes Jazz?',
        author_id: 1,
        date: 'Fri January 14 2018 00:00:00 GMT+0200',
        blog_img_small: 'assets/thumbs/masonry/tulips-400.jpg',
        blog_img_big: 'assets/thumbs/masonry/tulips-800.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
          'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
          'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
          'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
          'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
          'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
      },
      {
        id: 14,
        visited: 1421,
        tags: ['work', 'management'],
        title: 'Scrum Software for Agile Teams',
        author_id: 2,
        date: 'Fri December 11 2017 00:00:00 GMT+0200',
        blog_img_small: 'assets/thumbs/masonry/cookies-400.jpg',
        blog_img_big: 'assets/thumbs/masonry/cookies-800.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
          'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
          'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
          'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
          'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
          'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
      }
    ];
    const authors = [
      {
        id: 1,
        name: 'John Doe',
        avatar: 'assets/avatars/user-01.jpg'
      },
      {
        id: 2,
        name: 'Sarah Connor',
        avatar: 'assets/avatars/user-02.jpg'
      },
      {
        id: 3,
        name: 'Bruce Banner',
        avatar: 'assets/avatars/user-03.jpg'
      }
    ];
    const phrases = [
      {
        id: 1,
        body: 'The Only Resource You Will Need To Start a Blog Using WordPress.',
        caption: 'https://colorlib.com',
        link: 'https://colorlib.com'
      },
      {
        id: 2,
        body: 'Good design is making something intelligible and memorable. Great design is making something memorable and meaningful.',
        caption: 'Dieter Rams',
        link: ''
      }
    ];
    const about = {
      title: 'About Philosophy',
      body: 'Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum id orci porta ' +
        'dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit ' +
        'amet aliquam vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin ' +
        'molestie malesuada.',
      social: [
        {   name: 'social_fb',
          icon: 'fa fa-facebook',
          link: 'https://www.facebook.com/katerina.dribnitsa'
        },
        {   name: 'social_tw',
          icon: 'fa fa-twitter',
          link: 'https://twitter.com/rainbow6765745'
        },
        {
          name: 'social_inst',
          icon: 'fa fa-instagram',
          link: 'https://www.instagram.com/katerinadribnitsa/?hl=ru'
        }
      ]
    };
    const usersData = [
      {
        id: 1,
        name: 'Mojo',
        email: 'mojoMojo@gmail.com',
        password: '1111'
      },
      {
        id: 2,
        name: 'Gloria',
        email: 'gloria@gmail.com',
        password: '1111'
      }
    ];


    return {questions, questions_result, articles, blog, authors, phrases, about, usersData};
  }
}
