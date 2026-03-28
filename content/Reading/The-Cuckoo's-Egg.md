---
created:
  - " 03-27-2026 18:38"
tags:
---


# 📗 -> The Cuckoo's Egg - Cliff Stoll
---
[Online pdf](https://scispace.com/pdf/the-cuckoo-s-egg-1gjlb3wasy.pdf)


### Themes
**Computer Security**
Personal Responsibility (social contracts (networks), civic duties (tracking hacker at all))
- Hacking ethics / Techno-libertarianism
- Support of government
Obsession

Old tech - It's kind of funny reading about how computers were used before the proliferation of the internet. Telephone lines?? Are you kidding me?? Rad!!

### Motivations
#### Work as a whole
I was surprised to find out that this was nonfiction, and not some self insert spy novel. Reading it, I genuinely couldn't tell the difference. There's very little reflection on his past (or him as a human being for that matter) and it focuses purely on how smart/clever he is. If it wasn't true, it would be insuferable.

I can't blame a guy for bragging about bringing down russian spies, he earned his bragging rights after all. But when your work is indistinguishable from fanfiction, it says something about the style of your writing. 

Aside from being an interesting spy novel and peek into cyber security, the book is noteworthy for being one of the first and most prominent *documented* case of cybercrime/espionage. As I talk about more below, cybercrime is not particularly an existing language, and in response to getting hacked, many admins responded "so what?" 

#### Characters
##### Cliff Stoll
An astronomer turned cybersecurity guru by his fateful run-in with a unknown adversary. He is mainly characterized in this book as a obsessive, letting his battle with the hacker dominate his work and life (or at least he paints it this way.)

> I can't find the exact page now, but scene of him butt-naked, sopping wet in the middle of the dining room because his hacker-alert-pager went off. Without regard to his long term wife, and shameless in front of his other female roomate

Throughout the book, he plays two big themes in his head:
*Support of government* - Living in Berkeley, his support of the government is... contentious. He portrays himself as surrounded by if not outright commies, anti-government liberals (This book takes place in 1986, but is somehow timeless). He grapples with his own declared classical leftism, and if he should even be doing this. This is quickly overriden by his views on the other major theme:

*Techno-libertarianism* - The hacker is particularly annoying, since cybercrime is not a recognized concept at the time of the story. 
- He mentions how at this point in time, cybercrime law was thing. Near the end of his hunt, he mentions how the police wanted to capture the hacker red-handed, logged in. Funny anecdote of a canadian hacker being charged with 'stealing compute' / telephone bills [[#Cybercrime law|quote]]. 

He has many characters in the story to act explicitly as strawmen (Counterculture Laurie and Darren), respectively arguing "The hackers are anti-US so chasing them is bad", and "The hackers are harmless rascals, who cares." [[#Old fart|(quote)]]. These advance his argument that the central "crime" of the hackers in ruining a social contract. 
- His resolution: [[#Unlocked Houses]]

##### Assorted Women
I don't like doing it like this, but in the lens of the story... they are very similar. 

All of the people close to him appear to be mystical women: Martha (wife at the end), Claudia (violinist roomate), Laurie (alt old best friend in a previous Cliff/Martha/Laurie friend group), Jeannie (sister). At his wedding, he doesn't mention anybody except for this women's club.

On their own, relatively harmless, but Stoll appears to be... {gloating about this?} throughout the book. Multiple scenes of him in the shower with his wife, a scene of him naked in front of Claudia played for laughs, mentions of back rubs from Laurie? I'm glad he doesn't build a harem or imply they like him at any point, but it came off a bit odd while reading. 

To his credit, all of the women seem very strong and capable:
- Martha being portrayed as the motivated one in the relationship, and it being said she could beat him in a fight.
- Claudia, quirky quips, a good sport, talented.
- Laurie, a nontraditional women with no judgement placed upon here whatsoever.
- Jeannie, not mentioned much but portrayed as capable and loyal in her own right.

I think I need to reflect on this a bit more, I can't quite tease apart what struck me as disturbing about the portrayal. I think it is just how gratuitous and sickly sweet the scenes with Martha are. 
##### Various Government Agencies
Cliff has to communicate with the FBI / CIA / NSA / DOE / NCSC / army outposts / ... throughout the book. He actually does a pretty solid job of giving the agents some unique quirk or gimick to have them be somewhat separable. Not too much to be said here, they all have the same shtick of: "Not our bailiwick." Each of them points him to another agency, like a lazy dad telling a kid to bother their mother. 

By the end, we do see the Feds help to take the hacker's down, although we don't hear it in so many words.

It is also worth noting how reverent Stoll writes the deparment heads? Despite claiming to be a classical leftist, he shows an odd amount of respect to the government people every time he mentions them.

> "The more I thought about it, the more impressed I was with the military people. They'd zeroed in on the weak points of my talk, and understood both the details and importance of what I'd said." 
> - [[#Post Talk Jitters|Full quote]]
##### Coworkers
Fairly forgettable aside from Darren (punk Unix libertarian introduced late). His boss only pesters him once about actually doing work, and he brushes it aside in a chapter by adapting some existing software for his boss and placating him. I don't even remember his name.

### Personal Thoughts
#### Enjoyment
I really enjoyed this book. This might be the book that gets me back into reading, because it sure as hell isn't [[Agapē-Agape]]. I stayed up to finish the book, I got through it in around 5 days. It was a very nostalgic experience for me, I haven't done that since I was a boy. 
#### View of themes
I enjoyed this book as a spy thriller, and thought it was an interesting introduction to some common cybersecurity concepts, like network security, smaller nets (not the internet), being scrappy, and finally learned what rainbow tables and salt do (he doesn't explicitly explain them but he outlines the problem, and thats what made it click)! 

The themes, I found a bit shallow but I don't think they were meant to be deep. Stoll set out to write a cybersecurity spy thriller, and he did it. I just wish he didn't act as grandious when he proved that hacking is bad, after setting up not one, but TWO STRAWMEN.

### Cybersecurity Techniques
This one is a bit boring, but I wanted to make sure I absorbed a lot of the techniques mentioned in the book.

Also:
> If you'd like the technical details behind this book, read my article, "Stalking the Wily Hacker," in the May 1988 issue of the Communications of the ACM. It's an academic paper which highlights the techniques that the hacker used to break into computers.
> In addition, I described how to track hackers in "What Do You Feed a Trojan Horse?"—found in the Proceedings of the 10th National Computer Security Conference (September 1987). Because I wrote that paper while the hacker was still actively breaking into computers, it's about how to trace networks and doesn't mention our problems. 
> Stoll, Page 253 of 254

#### Being scrappy
It's very interesting in the book how Stoll's "weapons" work. He writes hacky software to be able to monitor the spy, and its often much closer to the hardware than I would have expected. Monitoring network lines, and interfacing with pagers. He's a full-stack engineer even if he didn't know it yet.

#### User permissions
We don't usually have to think about this too much, nowawadays we usually own a PC, why shouldn't I be able to view any file on the system? Workstations / central compute operates differently. We want to manage the tradeoff between users getting work down (scientists being able to share files and crunch numbers) and security (locking out bad actors)

#### Rainbow tables 
One of the more scary hacking techniques mentioned is the password file hashing. Even though they are all encrypted, if attackers know the encryption scheme, they can try to brute force known seeds (IE a dictionary full of words) to see if any generated hashed seeds match the password table
- In practice, this is countered by a salt. I didn't get this until reading the book. The password is combined with a random user string (generated randomly, this is a 'salt' put onto the password to make it slightly different from known words). Know, the rainbow table attack has to be run for every salt. Not completely prohibitive as the salt is public (if they want ONE users password, they could theoretically use a salted rainbow table), but makes it intractable to make a general rainbow table for every salt.

#### Diversity as defense
A really interesting allegory he mentioned is the idea of diversity as a defense against attackers. Viruses are very specific, and have to be written for a certain platform. If they use commands invalid to a certain platform (like using Powershell syntax on a Unix computer), they don't work. 

By having a blend of operating systems on the same network, the spread of a virus can be slowed. Instead of crippling the entire internet quickly (because with everything running the same OS, what works on one machine works everywhere), it can be useless on another system.

#### Rapidfire
I'm very surprised by some of these exploits, some of them show very shoddy countersecurity. The email one is particularly blatant...

*Gnu-Emacs email* - Sends an 'email' to another user (just transfers perms for a file from user A to B). It doesn't check if the email is being sent to somewhere sensitive. Gets sent to `atrun` where the hacker gains control of PC.
*X-preserve Vi* - Vi will backup lost work, by creating a copy of file at a 'stash' location. If stashed in priveledged locations, can be used to deliver executable payloads.
*Sendmail* - If theres an error in sending mail from one Unix computer to another, `Sendmail` enters debug mode. In debug, `Sendmail` allows the execution of commands from a foreign computer.
*Finger* - Normally, `finger {user}` allows inspection of another user. IE is user cliff active? What's he doing? If user overflows the username buffer (512 chars of data), the remaining characters are executed as commands.


### Quotes

##### Old fart
> "Cliff," he said, "you're an old fart. Why do you care so much that someone's frolicking in your system. That could have been you, in your distant youth. Where's your appreciation of creative anarchy?" 
> - Darren, Page 223 of 254

##### Cybercrime law
> "The real problem is in German law," Steve said. "I don't think they recognize hacking as a crime." 
> "You're kidding, of course."
> "No," he said, "a lot of countries have outdated laws. In Canada, a hacker that broke into a computer was convicted of stealing electricity, rather than trespassing. He was prosecuted only because the connection had used a microwatt of power from the computer."
> "But breaking into a computer is a crime in the USA."
> "Yes, but do you think the hacker will be extradited for that?" Steve asked. "Look at the support you got from the FBI. Be serious, Cliff." 
> - Cliff and Steve, Page 120 of 254

##### PET Hack
> The Petvax, of all computers! An outsider would think it's a toy—after all, a pet Vax computer, no?
> Hardly. Pet is an acronym for Positron Emission Tomography. It's a medical diagnostic technique to locate where oxygen is consumed in people's brains. By injecting a patient with an activated isotope, LBL's scientists create images of the brain's interior. All you need is a particle accelerator to create radioactive isotopes, a hypersensitive particle detector, and a powerful computer. 
> That computer is the petvax. Stored within it are patient records, analysis programs, medical data, and scans of people's brains.
> This hacker was playing games with medical tools. Break this computer, and someone's going to get hurt. A bad diagnosis or a dangerous injection. Or what?
> The doctors and patients who used this instrument needed it to work perfectly. This was a sensitive medical device, not a plaything for some cyberpunk. Some poor computer geek, indeed. 
> - Cliff, Page 192 of 254

##### Unlocked Houses
> Some programmers see this virus as a useful exercise in raising consciousness about computer security. The virus writer should be thanked. Yeah, sure. Like going into a small town and breaking into people's homes, so as to impress upon the townsfolk the need to buy strong locks.
> Once, I too would have seen no mischief in this virus. But over the past two years, my interest changed from a micro-problem (a 75-cent discrepancy) to macroissues: the welfare of our networks, a sense of common fair play, legal implications of hacking, the security of defense contractors, commonweal ethics in computing . . . 
> - Cliff, Page 248 of 254

##### Post Talk Jitters
> I was suddenly queasy. I pressed the replay button in my mind. Did I screw up? It's a weird feeling of being nervous after you do something. The more I thought about it, the more impressed I was with the military people. They'd zeroed in on the weak points of my talk, and understood both the details and importance of what I'd said.
> How far I'd come. A year ago, I would have viewed these officers as warmongering puppets of the Wall Street capitalists. This, after all, was what I'd learned in college. Now things didn't seem so black and white. They seemed like smart people handling a serious problem. 
> - Cliff, Page 200 of 254