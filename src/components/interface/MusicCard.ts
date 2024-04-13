export interface IMusicPlayer {
  setMusicPlay: React.Dispatch<React.SetStateAction<boolean>>;
  musicPlayed: boolean;
}

export interface IMusicCover {
  image: string;
  title: string;
  type: string;
  author: string;
}

export interface MusicCoverProps extends IMusicCover {
  setMusicPlay: React.Dispatch<React.SetStateAction<boolean>>;
  musicPlayed: boolean;
}
