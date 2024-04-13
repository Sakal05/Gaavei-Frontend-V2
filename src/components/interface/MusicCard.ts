export interface IMusicPlayer {
    setMusicPlay: React.Dispatch<React.SetStateAction<boolean>>;
    musicPlayed: boolean;
}