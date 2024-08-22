import { Member, Room, Team } from "@/lib/interface/manage";

export const filteredRooms = (rooms: Room[], val: string): Room[] => {
  if (!val) {
    return rooms;
  }

  return rooms.filter((room) => {
    const nameMatches = room.room_name
      .toLowerCase()
      .includes(val.toLowerCase());

    return nameMatches;
  });
};

export const filteredMembers = (members: Member[], val: string): Member[] => {
  if (!val) {
    return members;
  }

  return members.filter((member) => {
    const nameMatches =
      member.firstname.toLowerCase().includes(val.toLowerCase()) ||
      member.lastname.toLowerCase().includes(val.toLowerCase());

    const emailMatches = member.email.toLowerCase().includes(val.toLowerCase());

    const partyMatches = member.party.toLowerCase().includes(val.toLowerCase());

    const positionMatches = member.position
      .toLowerCase()
      .includes(val.toLowerCase());

    return nameMatches || emailMatches || partyMatches || positionMatches;
  });
};

export const filteredTeams = (teams: Team[], val: string): Team[] => {
  if (!val) return teams;

  return teams.filter((team) => {
    const aideName = team.name_of_aide
      .toLowerCase()
      .includes(val.toLowerCase());

    const aideLevel = team.aide_level.toLowerCase().includes(val.toLowerCase());

    const legislativeMember = team.legislative_member
      .toLowerCase()
      .includes(val.toLowerCase());

    return aideName || aideLevel || legislativeMember;
  });
};
