function skillsMember() {
  const member = new Member();
  member.skills = ['JavaScript', 'React', 'Angular'];
  member.getSkills = function() {
    return this.skills;
  };
  return member;
}