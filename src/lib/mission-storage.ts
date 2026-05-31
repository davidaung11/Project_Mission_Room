export type SavedMission = {
  id: string;
  title: string;
  program: string;
  university: string;
  progress: number;
  sessions: number;
  tasks: number;
  logo: string;
};

const STORAGE_KEY = "mission-room-missions";

export function getSavedMissions(): SavedMission[] {
  if (typeof window === "undefined") return [];

  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return [];

  try {
    return JSON.parse(saved) as SavedMission[];
  } catch {
    return [];
  }
}

export function saveMission(mission: SavedMission) {
  const current = getSavedMissions();
  const exists = current.some((item) => item.id === mission.id);

  const next = exists
    ? current.map((item) => (item.id === mission.id ? mission : item))
    : [...current, mission];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

export function clearMissions() {
  localStorage.removeItem(STORAGE_KEY);
}