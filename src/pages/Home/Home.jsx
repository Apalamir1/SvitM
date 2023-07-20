import { useState, Suspense } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { HitSwiper } from '../../components/HitSwiper/HitSwiper';
import {
  Title,
  Container,
  LinkContainer,
  InfoImage,
  Category,
  Subcategory,
} from './Home.styled';

export default function Home() {
  const location = useLocation();

  const backPageLink = location.state?.from ?? '/';

  const questions = [
    {
      id: 1,
      question: 'Питання 1',
      answer: ['Відповідь 1-1', 'Відповідь 1-2', 'Відповідь 1-3'],
    },
    {
      id: 2,
      question: 'Питання 2',
      answer: ['Відповідь 2-1', 'Відповідь 2-2', 'Відповідь 2-3'],
    },
    {
      id: 3,
      question: 'Питання 3',
      answer: ['Відповідь 3-1', 'Відповідь 3-2', 'Відповідь 3-3'],
    },
  ];

  const [selectedQuestionId, setSelectedQuestionId] = useState(null);

  const handleQuestionClick = questionId => {
    setSelectedQuestionId(prevId =>
      prevId === questionId ? null : questionId
    );
  };

  return (
    <Container>
      <Title>Хити продажу</Title>
      <HitSwiper></HitSwiper>
      <Title>Акції</Title>
      <HitSwiper></HitSwiper>

      <LinkContainer>
        <Category>Матраси</Category>
        <Subcategory to="bonel" state={{ from: backPageLink }}>
          <InfoImage
            src="https://images.ctfassets.net/cfeesto322pw/55Sqawgp93rWTkKgDQZguc/f1ac912e44ce3c404bb9884195666406/bonnel-mattress.jpg"
            alt="Bonnel"
          />
          <h5>bonel</h5>
        </Subcategory>
        <Subcategory to="pocketSpring" state={{ from: backPageLink }}>
          <InfoImage
            src="https://velam-matras.com.ua/matrasy/Sapfir/Sapfir-632b.jpg"
            alt="PocketSpring"
          />
          <h5>pocketSpring</h5>
        </Subcategory>
        <Subcategory to="springless" state={{ from: backPageLink }}>
          <InfoImage
            src="https://velam-matras.com.ua/matrasy/Parmezan/Parmezan-626b.jpg"
            alt="Springless"
          />
          <h5>springless</h5>
        </Subcategory>
        <Subcategory to="futon" state={{ from: backPageLink }}>
          <InfoImage
            src="https://velam-matras.com.ua/matrasy/Smaylik/Smaylik-637b.jpg"
            alt="Futon"
          />
          <h5>futon</h5>
        </Subcategory>
      </LinkContainer>

      <LinkContainer>
        <Category>Супутні товари</Category>
        <Subcategory to="bonel" state={{ from: backPageLink }}>
          <InfoImage
            src="https://velam-matras.com.ua/namatrasniki/Chempion-Midl/Chempion-Midl-676b.jpg"
            alt="Mattress pad"
          />
          <h5>Наматрасники</h5>
        </Subcategory>
        <Subcategory to="pocketSpring" state={{ from: backPageLink }}>
          <InfoImage
            src="https://velam-matras.com.ua/odeyala/Assol-Luks/Assol-Luks-761b.jpg"
            alt="Blancket"
          />
          <h5>Ковдри</h5>
        </Subcategory>
        <Subcategory to="springless" state={{ from: backPageLink }}>
          <InfoImage
            src="https://velam-matras.com.ua/podushki/Lateksnaya/Lateksnaya-757b.jpg"
            alt="Pillow"
          />
          <h5>Подушки</h5>
        </Subcategory>
      </LinkContainer>
      <div>
        <h3>Відповіді на питання які часто ставлять :</h3>
        <div>
          {questions.map(question => (
            <div key={question.id}>
              <p onClick={() => handleQuestionClick(question.id)}>
                {question.question} {selectedQuestionId === question.id}
              </p>
              {selectedQuestionId === question.id && (
                <p>
                  <ul>
                    {question.answer.map((answer, index) => (
                      <li key={index}>{answer}</li>
                    ))}
                  </ul>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
