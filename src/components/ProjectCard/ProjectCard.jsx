import React from "react";
import PropTypes from "prop-types";
import styles from "./ProjectCard.module.css";
export default function ProjectCard({ title, description, imageUrl, tag }) {
  return (
    <article className={styles.card}>
      <img src={imageUrl} alt={"Демонстрационный макет " + title} />
      <div className="card-body">
        <span className="tag">{tag}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="muted">Учебный концепт / 2026</span>
      </div>
    </article>
  );
}
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
