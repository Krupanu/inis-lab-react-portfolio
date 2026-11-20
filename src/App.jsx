import React from "react";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import InputField from "./components/InputField/InputField";
import { projects } from "./data";
export default function App() {
  return (
    <>
      <header>
        <a class="logo" href="#home">
          <img src="/assets/logo.svg" alt="Монограмма М" />
          АЛЕКСЕЙ / DEV
        </a>
        <nav aria-label="Основная навигация">
          <a href="#projects">Проекты</a>
          <a href="#about">Обо мне</a>
          <a href="#contact">Контакт</a>
        </nav>
      </header>
      <main>
        <section id="home" class="hero">
          <span class="eyebrow">ПОРТФОЛИО / 2026</span>
          <h1>
            Создаю интерфейсы.
            <br />
            <em>Продумываю детали.</em>
          </h1>
          <p class="intro">
            Я Алексей Максимович, студент БГУИР. Изучаю веб-разработку и
            превращаю идеи в понятные цифровые продукты.
          </p>
          <div class="actions">
            <a class="btn" href="#projects">
              Смотреть проекты <span aria-hidden="true">↗</span>
            </a>
            <a class="btn secondary" href="#contact">
              Связаться
            </a>
          </div>
        </section>
        <section id="projects">
          <div className="section-head">
            <h2>Избранные проекты</h2>
            <span className="muted">04 / УЧЕБНЫЕ КОНЦЕПТЫ</span>
          </div>
          <div className="grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </section>
        <section class="about" id="about">
          <span class="eyebrow">01 / ОБО МНЕ</span>
          <div class="about-wrap">
            <img
              class="portrait"
              src="/assets/avatar.webp"
              alt="Условный аватар разработчика"
            />
            <div>
              <h2>От структуры — к деталям</h2>
              <p>
                Учусь на факультете компьютерного проектирования БГУИР.
                Практикую компонентный подход, адаптивную вёрстку и работу с
                данными. Здесь собраны демонстрационные интерфейсы учебных
                проектов.
              </p>
            </div>
          </div>
        </section>
        <section id="contact" className="contact">
          <span className="eyebrow">02 / КОНТАКТ</span>
          <h2>Начнём с идеи</h2>
          <p className="muted">
            Демонстрация формы: сообщение выводится в консоль браузера.
          </p>
          <InputField />
        </section>
      </main>
      <footer>
        <span>© 2026 Алексей Максимович</span>
        <a href="https://github.com/Krupanu">GitHub / Krupanu ↗</a>
      </footer>
    </>
  );
}
