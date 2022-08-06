import styles from './Avatar.module.css';

interface AvatarProps {
  hasBorder?: boolean;
  src: string;
  alt?: string;
}

export function Avatar({ hasBorder = true, src, alt }: AvatarProps) {
  const avatarHasBorder = hasBorder !== false;

  return (
    <img className={avatarHasBorder ? styles.avatarWithBorder : styles.avatar} src={src} alt={alt} />
  );
}