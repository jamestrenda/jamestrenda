import React from 'react';
import styles from './blockquote.module.css';

export default Blockquote = ({ children }) => (
	<blockquote className={styles.quote}>{children}</blockquote>
);
