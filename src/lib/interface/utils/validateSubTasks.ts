import { User } from "@/lib/interface/user";
import { subTaskType } from "./tasks";

export const validateSubTasks = (data: subTaskType[], people: User[]) => {
  const subTasks = data.map((sub) => {
    const _assignee = people.find((person) => person.staff_id === sub.assignee);

    const assignee = _assignee
      ? {
          firstName: _assignee?.firstName,
          lastName: _assignee?.lastName,
          staffId: _assignee?.staff_id,
        }
      : {};

    const { assignee: Assignee, ...rest } = sub;

    return {
      ...rest,
      ...(Object.keys(assignee).length ? { assignee } : {}),
    };
  });

  return subTasks;
};
