---
title: How To ... in the Lab
description: 'An exhaustive guide to all good practices in the lab'
category: Tutorials
---

**This DOC was copypasted from Florian Schreck's documentation for the Strontium BEC group in the Institute of Physics of Amsterdam. Thanks to them !**

## Foreword

This page is meant to be an exhaustive, detailled, micromanaged, maniac and condescending list of procedures and tips for all the day to day work in our type of labs. Hopefully, if you follow all these instructions to the letter, you will be fast, efficient, and the job will be well done, which means better stability and in the end less work. I recommend that for each section, your read it carefully and completely, even if it is boring, as usually every tiny detail has annoying consequences.


## Miscellaneous tips

- Use apertures!!! Before changing anything on your beam setup, make sure that you have place correctly 2 apertures to define exactly your beam trajectory. Correctly means with a decent distance between them to be precise enough (the longer the better, TWSS), and with at least two mirrors (or equivalent) before them to be able to realign the beam to these apertures. Trust me, the 5 minutes you take to placec these apertures will make you gain at least an hour compare to the case where you have to realign everything without these marks.
- To correctly align a beam on 2 apertures, you must ALWAYS look after the aperture, and not on the aperture: the scaterring that you see on the aperture depends often on the position of your eyes compare to the surface of the aperture, which is misleading. You will never do such a mistake if you look at what is transmitted through the aperture.
- Once you finish your work (like at least at the end of each day), always CLEAN and TIDY your setup and your tools (back to their dedicated emplacement). By taking five minute to do that, you will gain 1 hour of not having to find your tool left in a random place. Also your colleagues will not hate you, and the whole group will work more efficiently and in a pleasant work environment.
- Don't leave unclamped optics on the table: someone (it can happen to you, it can happen to me) will bump unto it and break it.

## How to... mount a new optic
- When manipulating optics, do not touch the optic useful surface (use a lens cleaning tissue to handle it, or at worst powder free gloves). If you touched it, you need to clean it right away (finger grease dried for months is very hard to remove). See the "How to..." clean optics.
- LABEL the optic using a pencil. Write on the side of the thick optic, putting all meaningful information: optic type, part number, wavelength... If there is not enough space to label the optic itself (e.g. a lambda/2 waveplate), label the optic's mount. A non labelled optic can be already considered as lost, and losing expensive optics (200 euros easily for a waveplate, e.g.) is not tolerable.
- ALWAYS make sure that the new optic is clean before placing it. If not, clean it.
- When you mount opto-mechanic parts, ALWAYS use an allen key to fix tightly, and NOT a ball driver. A ball driver is NEVER strong enough to fix correctly optomecha parts. Make sure that EVERY connection is tight.
- LABEL the optomecha mount.
- 1/2" post and post holders (e.g. Thorlabs PH2E) should be used ONLY for non critical components, such as lambda/2, lambda/4 and apertures. NEVER use it for mirrors, lenses... This type of holders is not stable enough. Always use 1" post instead (e.g. Thorlabs RS1P), and make the height right by using 1" spacers (e.g. Thorlabs RS5M).
- When mounting a PBS, ALWAYS put a piece of electrician tape below the PBS, otherwise it can slide.
- When placing a lens: if you have a plano-convex lens, to minimize spherical aberrations, you must place the plan surface on the side where the waist is the closest. Example given, if your beam is collimated, then you place a lens, the convex surface is on the side of the collimated beam (in geometric optics, the waist is at the infinity, so ... far) and the plan surface is on the side of the focused beam. The same way of thinking applies for a plano-concave lens.

## How to... place a new optic

- ALWAYS make sure that the new optic is clean before placing it. If not, clean it.
- ALWAYS make sure that the new optic is labelled before placing it. If not, label it.
- Always align your beams following the lines drawn by the holes of the optical table. Put your mirrors always at 45°. This will make your life so much easier, and optics coating are angle dependents.
- Place your optics such as the laser beam hit the center of the mirror/lens (avoid aberration for lenses, and simplify the alignment for everything).
- Put the clamping fork (Thorlabs CF125) as much as possible in contact with the 1" post. If not, the optomecha is not properly fixed.

- When clamping optomecha, make sure it doesn't touch other components: clamping with a screw can make a lot of force, and misalign other components.
- When clamping optomecha, use appropriate screw (the gray ones, not the shiny silver ones), with appropriate length. Use a washer.
- When you clamp opto-mechanic parts, ALWAYS use an allen key to fix tightly, and NOT a ball driver. A ball driver is NEVER strong enough to clamp correctly optomecha parts.


## How to... do a "walking"

This is a very basic procedure, that everyone should master perfectly!

The goal is to align a collimated laser to the direction and position you want. This can be typically illustrated when you want to pass your beam accross 2 consecutive apertures (e.g., like Thorlabs ID12): two points in 3D space define exactly your beam trajectory.

For this procedure, you need two mirrors (or equivalent). With no less than 2 mirrors (with both horizontal and vertical knobs), you can align a beam to a desired trajectory.

![walking](/assets/img/HowTo/HowToWalking.jpg){ width=600 }

The procedure goes as follows:

- Look at the position of the beam on the first aperture (aperture 1), and align the beam using the first mirror (mirror 1), moving vertical and horizontal knobs.
- Once it is align, look at the position of the beam on aperture 2, and align the beam using mirror 2, moving vertical and horizontal knobs.
- Repeat the 1st step. Then the 2nd step. Then continue like that until the beam is properly align on both apertures.
- Job done.

Following this procedure will make the beam converge more and more to the desired trajectory. Inverting the relationship between mirror and aperture will not converge.

The setup presented in the picture is the simplest to understand, but you can do many variation of the walking procedure by putting you apertures at other place. The important point is not to mix up the relationship between mirror and aperture, so as to reach convergence.


## How to... place an AOM from scratch

- If you plan to vary the frequency of your AOM, followed by injection into a fiber, you need to do a double pass AOM setup, as the beam angle depends on the Rf frequency.

- If you plan to do a double pass AOM setup, with plan to vary the frequency, you should place a telescope.
- To chose your telescope system, you need to know the beam waist of your laser, and look at the datasheet for the curve of efficiency vs beam size. AOM diffracts best for plane waves, extending on a wide wavefront. Therefore, is you focus your beam on a tiny spot inside the AOM, the efficiency will be poor both because of the small area on the grating and because of the short Rayleigh length (curved wavefront inside the AOM crystal). The rule is thus, the bigger the beam, the better the efficiency. On the other end, the smaller the beam, the faster the switch on/off time due to the propagation speed of the acoustic wave accross the beam. Moreover, you should obviously choose a beam size that passes through the AOM aperture (and the diffracted order should come out too).
- The following will explain the setup for a double pass AOM with telescope.

![AOM](/assets/img/HowTo/Double_Pass_AOM.png)


- For aligning your AOM, you need only to degrees of freedom, for both vertical and horizontal. Therefore, you need an injection mirror that can be moved, and an AOM placed on a movable mount. For a double pass setup, you can replace the injection mirror by a PBS on a movable mount.
- AOM efficiency if bigger when the polarization of the light if align with the moving grating lines (perpendicular to the propagation of the acoustic wave). For a standard setup, it means vertical polarization. You get it for free if you use an injection PBS. For double pass AOM, it doesn't matter, as you will have vertical polarization for one way and horizontal for the way back.
- When mounting the AOM, make sure that you electrically isolate it from the table (put an isolation sheet somewhere on the mount). The optical table is connected to the ground. The AOM is connected to the ground via the RF supply. If you connect both, you make a ground loop, which is bad.
- Place the injection mirror/PBS (clamp it). Make the beam go horizontal, and following the lines of the optical table. Place the first lens such that the beam is not displaced by it (the height should be well suited - clamp it). Place your AOM at the focus of the first lens (again, the height should be well suited - don't clamp it). The AOM should not be tilted compared to the optical table plane.
- Put a medium amount of RF power. Before doing that, check what medium means by looking at the datasheet. Typically few 100 mW should do it.
- The RF frequency must be the one you want to work with, or the median one on the range that you want to use. Also, the frequency should be within the bandwith of the AOM, if not you will destroy the RF amplifier with reflection of RF.
- Try to see a diffraction signal after the aom, both by tilting the AOM and translating it perpendicularly to the beam propagation axis. Do that by moving the unclamped post directly. You can also move a bit the vertical knob of the injection mirror/PBS. If you don't see anything, your geometric alignment is not correct: repeat the procedure above.
- Once you see a diffraction beam, make sure that it is really diffracted, and not just a reflection inside the crystal. Two easy checks are possible: reduce the RF power, and the diffracted beam(s) should disappear, leaving only the 0th order; move the vertical knob of the injecting mirror/PBS, and the diffracted beam(s) should disappear faster than the 0th order.
- Once you are sure you have a diffracted beam, reduce the RF power as much as you can, while still seeing only 1 faint diffracted order. That way you will be sure to align the AOM correctly, and not on a local optimum.
- Once the RF power is reduced, move again around the AOM (by moving the unclamped post, translation+tilt) to maximize the efficiency of this order of diffraction (select the one you want to work with), while not blocking the 0th order.
- In our typical Gooch and Housego AOMs in the lab, the piezo is placed on the same side of the crystal as the SMA/SMB connector. Thus, the -1 order is the one going closer to the connector, the +1 order is the one going away from the connector.
- Once you have maximized the order you want to work with, clamp the AOM post.
- To optimize the injection, you need to act on 4 knobs: 2 knobs of the AOM mount (vertical tilt, horizontal tilt), and 2 knobs (vertical, horizontal) of the injecting mirror/PBS.
- The method is clear: optimize INDEPENDENTLY the 4 aforementionned knobs, one after another, trying to reach the best diffracted power on your powermeter. Do all 4 knobs, SEVERAL TIMES, until you do not see any improvement. The order you touch the knobs does not matter. BEWARE: this is NOT a walking procedure!
- Once you think you are at the optimum, look at the powermeter head to see if the 0th order is still well blocked, and if the other orders of diffraction that you don't want are not on the head (+/-2, +/-3...). If not, you did it wrong, repeat the procedure from the start. If only the diffracted order of interest is on the head, finallize the alignment by touching the 4 knobs again once, and check that you are indeed at the maximum.
- Now reduce the RF amplifier gain (act on the potentiometer using a tiny flat screwdriver) so that you see no diffraction. Put the DDS intensity at 100%, and raise slowly the gain on the amplifier, until reaching a maximum. Put the gain a tiny bit below the maximum value. Make sure that the amplifier does not act weird (produces too strong harmonics if the gain is too high). You can make sure of that by noticing an hysteresis while ramping up then down the amplifier. Starting from low gain ensure the correct behaviour of the amplifier.
- Sometimes you can gain a bit on the efficiency by touching a bit the 4 knobs again after having optimized the RF power.
- Measure the input power, diffracted power, AOM efficiency, and write it down on the labbook.
- Now place the second lens of the telescope. Place the center of the lens on the diffracted order (the only one you usually care about - if you care about both, compromise).
- The axial position of the lens should be such that the distance between the lens and the AOM is equal to the focal lens. To make a better alignment, look at the separation between the 0th order and the 1st diffracted order. Look at it right after the lens and also at the longest distance you can (at least 2 meters): the separation should have the same length at both positions. If not adjust the position of the lens accordingly. This is very important to ensure that the beam is not moving in the double pass configuration when the RF frequency is varied.
- Now place a lambda/4 waveplate after the lens (not before, the retardation is slightly angle dependent, so the beam must be collimated).
- Place 2 apertures. One after the first lens, aligned on the incoming beam. One close to the second lens, align on the diffracted order. Close both apertures as much as you can, while still letting pass the beams. The second aperture MUST block the 0th order.
- Place a retro-reflection mirror (suitable at 0° angle). The best position for this mirror is by making a f-2f-f configuration setup (see picture), but it is not necessary if you don't have the space, as the effect is small. If you don't have the space,just put it as close as possible.
- Align the retro-reflection mirror such as the beam comes back into the AOM.
- Look on the transmission of the PBS. You should see the beam that has been diffracted a second time. You should also see the 0th order of the retro-reflected beam, probably blocked on the first aperture if you did it correctly.
- Make sure that it is indeed the diffracted beam, and not the 0th order. To this end, move the vertical knob of the retro-reflection mirror: the first beam to disappear is diffracted, the last is the 0th order of the retro-reflected beam.
- Make sure this is the diffracted beam passing through the PBS, and that it is the correct order of diffraction (+/- 1, same rule as for the single pass case).
- Maximize the diffraction efficiency by moving independently the 2 knobs of the retro-reflection mirror. Make sure that the beam is nicely centered on the first apperture (the horizontal knob is ususally not very sensitive). Make sure that the 0th order of the retro-reflected beam is not passing through the aperture and thus going to the powermeter and messing up your optimization procedure.
- Rotate the lambda/4 waveplate to have the maximum amount of light passing through the cube. Fix the waveplate rotation.
- Measure the input power, single pass diffracted power, double pass diffracted power, AOM single and double pass efficiency, and write it down on the labbook.

## How to... inject an AOM already placed and almost aligned

In case an AOM is already placed and almost aligned, and you just want to tweak it a bit to have better diffraction efficiency (to compensate mechanical drift occuring over months).

- Place your power meter in front of the diffracted order of interest (usually + or - 1 order). Make sure to block the 0th order (not diffracted) with a paper or a metallic blocker (in case of high optical power, above 30 mW typically), such as the powermeter does not see it.
- In our typical Gooch and Housego AOMs in the lab, the piezo is placed on the same side of the crystal as the SMA/SMB connector. Thus, the -1 order is the one going closer to the connector, the +1 order is the one going away from the connector. Obviously, the 0th order path is unaffected, and is the one remaining when the RF is off.
- To optimize the injection, you need to act on 4 knobs: 2 knobs of the AOM mount (vertical tilt, horizontal tilt), and 2 knobs (vertical, horizontal) of the first mirror before the AOM.
- The method is clear: optimize INDEPENDENTLY the 4 aforementionned knobs, one after another, trying to reach the best diffracted power on your powermeter. Do all 4 knobs, SEVERAL TIMES, until you do not see any improvement. The order you touch the knobs does not matter. BEWARE: this is NOT a walking procedure!
- Once you think you are at the optimum, look at the powermeter head to see if the 0th order is still well blocked, and if the other orders of diffraction that you don't want are not on the head (+/-2, +/-3...). If not, you did it wrong, repeat the procedure from the start. If only the diffracted order of interest is on the head, finallize the alignment by touching the 4 knobs again once, and check that you are indeed at the maximum.
- Now reduce the RF amplifier gain (act on the potentiometer using a tiny flat screwdriver) so that you see no diffraction. Put the DDS intensity at 100%, and raise slowly the gain on the amplifier, until reaching a maximum. Put the gain a tiny bit below the maximum value. Make sure that the amplifier does not act weird (produces too strong harmonics if the gain is too high). You can make sure of that by noticing an hysteresis while ramping up then down the amplifier. Starting from low gain ensure the correct behaviour of the amplifier.
- Sometimes you can gain a bit on the efficiency by touching a bit the 4 knobs again after having optimized the RF power.
- Measure the input power, diffracted power, AOM efficiency, and write it down on the labbook.


## How to... inject an optical fiber

The hardest part to inject a fiber is to get a signal on the other side of the fiber, even the slightest signal (use your eyes, an IR viewer, or a powermeter for the smallest signals below microW). Once you have it, it is relatively easy and requires to apply the formula in the section 4.

When you do not have a signal, that is when it can be a bit more hazardous, but if you follow the method, it will be ok. There are several methods, with various

- You need only a few mW to inject a fiber (1 mW is plenty enough). DO NOT use more than 15 mW to inject a fiber from scratch, as you can burn the tip of the fiber if it does not enter the core.
- Always inject a fiber first with LOW power, and once it is injected properly, put the nominal power and fine tune the injection by a last tiny "walking" procedure.


### How to select/place the fiber/collimator

- Take a fiber with a cutoff wavelength smaller than your laser beam wavelength, but still close to it.
- Take a collimator with the appropriate Anti-Reflective coating. For our standard Schäfter+Kirchhoff collimators, the list of coatings and focal lengths is the following.

S+K collimator datasheet 

- For choosing the best fiber/collimator, you must know the waist of your incoming beam. You thus must measure it beforehand (see "How to..." on the subject). Alternatively, send some light from the other side of the fiber (your output, just like in section "3rd method: for lazy/rich people"): the beam coming out the input has the perfect size for best coupling efficiency into this fiber; you therefore must match your beam size (e.g. with a telescope system) with the size of this outgoing beam.
- If you know the size of the beam, you should choose your fiber/collimator such as the following formula is verified: w = NA x 0.82 x f. Where w is the waist of your beam, NA is the numerical aperture of the fiber, f is the focal length of the collimator. If you are aiming for the very best efficiency, it does not hurt to try different combinations around these parameters.
- With our standard Schäfter+Kirchhoff collimators, place the collimator in its holder such as the big focus adjustment hole is facing upward (much more simple for finding the position of the focus, you will thank me later). Also make sure that the 2 tiny screws close to this focus adjustment hole can be reached when the collimator is mounted.

### 1st method: the one you should never skip

- As always for an optic setup, the proper starting condition will save you a lot of time. This procedure do not ensure that you will see something, but you must do it anyway, as it will help you a lot for the other, more precise methods.
- Make sure that your incoming beam follow the lines of the breadboard, drawn by the M6 threaded holes.
- Make sure that your beam is running horizontal.
- Make sure you have enough degrees of freedom: two mirrors, or one mirror + one collimator mount, for both vertical and horizontal. The following will described only the case with 1 mirror + 1 collimator mount, as it is more compact and saves one mount. The principle stays the same though.
- Make sure the beam hits the mirror at its center. The mirror angle should be 45 degree compare to the breadboard lines.
- Make sure the collimator height is the same as the beam height. Make sure (by eye) that the collimator axis is the same as the beam axis.
- Make sure your mirrors and collimator mounts have their knobs at the middle of their full spanning range.
- Do not put the fiber in the collimator yet.
- Using the mirror, or by translating the collimator mount, center the beam on the collimator by eye.
- Look at the beam after it passes through the collimator and the fiber holder: you should be able to see it. Tilt the collimator mount in order to see it and to have it at the center of the circular shadow made by the edges of the collimator.
- Repeat the two previous steps (centering on the collimator using the mirror, centering on the shadow by tilting the collimator mount) until it converges.
- All the previous optimization should have been performed without clamping the mounts to the table.
- Clamp both the mirror and the collimator mount on the table.
- The following trick does not work all the time, as it depends on the collimator focal length, but it gives you a better precision: still looking at the beam after the collimator, move the beam along one axis, say let's start with the vertical, by moving the mirror knob; when you go to far one way or the other, the beam become clipped; the way the beam become clipped might be asymmetric going upward/downward (faster clipping for the same rotation speed of the knob; diffrent shape of the clipping shadow); if you don't see this asymmetry between top and bottom, center back the beam compared to the circular shadow using the mirror then skip this step; if you see an asymmetry, make it symmetric by moving the vertical knob of the collimator mount; the way the beam clipped should be made symmetric by this method; once this is done, do the same with the horizontal axis; once both axis are done, center back the beam compared to the circular shadow using the mirror.
- Put the fiber in the fiber holder, and screw it in fully. Be sure that the tiny knob on the side of the fiber, which prevents it from rotating, is correctly inserted in the slot of the collimator.
- Look at the output of the fiber, using eyes / IR viewer / powermeter.
- If you see something, go to the section "Once you have a signal".
- If you don't see anything, even with the powermeter: try unscrewing a tiny bit the fiber, and pull it out a bit (beam less focused, so more chances of something entering the fiber). If then you see something, optimize it using the 4 knobs of the mirror and collimator mounts, independently. Then plug back in the fiber and screw it tight. If by doing so you lose the signal, then pull it out again, but less far, and plug it back gradually, improving always the signal by touching the 4 knobs. At the end, you should have a signal with the fiber tightly screwed in. If so, go to the section "Once you have a signal".
- If you do not see anything, even with the trick of pulling out the fiber, then repeat the whole procedure of the 1st method. If that is at least the second time you do it, and you have checked that you have followed every instructions to the letter, then maybe you are allowed to try the next method (but you have to be sure: always doubt yourself, always recheck your work).


### 2nd method: retro style

Using the fact that the S+K collimators have an output that is nicely perpendicular to the optical axis (the collimator lens axis), we can use the following method.

- Take a flat mirror (with parallel front and back surfaces), preferably an old broken one that you don't plan on using on an optical setup.
- Using the mirror knobs, center the laser beam on the center of the collimator input (step 1).
- Put the mirror in front of the collimator input, maintaining (by hand)) the mirror back surface in contact with the collimator input.
-  The laser beam light should reflects on the mirror, and the direction of the retro-reflected beam will tell you about the tilt of the collimator with respect to the incoming lasr beam.
- Look at the retro-reflected beam at the position of the mirror (use a piece of paper with a hole in it, to let pass the incoming beam).
- Using the collimator mount knob, align the retro-reflected beam with the incoming beam (eend of step 2).
- Remove the retro-reflecting mirror, and repeat the procedure again starting with step 1.
- Stop the procedure when the 2 beams (incoming and retro-reflected) are overlapped both at the position of the mirror and the collimator.
- Now check if you have some signal coming out of the fiber output.
- If you see a signal, job done, go to the appropriate section below.
- If you don't see a signal, try your luck, by holding simultaneously the 2 knobs of the collimator mount or the ones of the mirror mounts, and wiggle them randomly, in the hope of being very close to the correct alignment.
- If you still don't see anything, you can try the trick of pulling out the fiber (see method 1). Or repeat the whole method 2, or try another one.


### 3rd method: for lazy/rich people

It is extremely easy to inject a fiber, if you already have a fiber injected (with similar wavelength) or if you have a laser such as the handeld fiber coupled Thorlabs HLS635 (which cost more than 500 euros, therefore is for spoiled kids only).

- The method is to connect your handheld laser on the other side of the fiber (your output). Or connect your already injected 2nd fiber to the output using a fiber mating sleeve like the Thorlabs ADAFC3. In both cases light is going to come out the input port.
- Overlap the light coming out of your fiber with the one from your beam that you want to inject. The overlap should be done using a "walking procedure" (see "How to..." on the subject) between 2 mirror mounts, or between the collimator holder and the last mirror mount, looking at 2 different positions along the beam path.
- If you do the walking properly until the two beams are correctly overlapped (checking by eye is sufficient), you can remove you handeld laser/2nd fiber from the output, and see if now you have some light coming out.
- If you do not have light coming out, you failed doing the walking properly, and you have to do it again.
- If light is coming out, see the appropriate section below.
- Of course this method is not recommended if you can not afford to unplug the output end of the fiber, because you do not want to lose the alignment of the rest of the optical setup after the fiber.


### Once you have a signal

Even if you have the faintest (even nW on your power meter - checked by blocking then unblocking the light), it is enough to undergo the following procedure.

- Start by touching one mirror mount, or the collimator mount, on both vertical and horizontal axis. Try to get the maximum signal.
- Once you have reached the optimum, choose one knob for one axis, and try to "explore" a much further range of the knob position, to see if you were an a local optimum. You can afford to lose the signal, provided you touch only one knob, so you can find it back since it is only a 1D scan => ergo, go crazy and explore the full span of the mirror knob.
- Once you explored one direction, try exploring the other one.
- If you think you are not on a local optimum, start doing a "walking" procedure, one axis after the other, and repeat.
- If after the walking, you have a ridiculous efficiency (10 microW out of 1 mW), something is wrong: you are on a local optimum => repeat the "exploration" as above; OR the fiber is scratched/dirty => clean it.
- if you have an efficiency bigger then 10%, you are injecting correctly, you can go to the next step.
- Once the walking is done correctly, you need to position correctly the collimator lens along the optical axis.
- Put FIRST the rotating knob from S+K into the focus adjustment hole.
- Unscrew the 2 tiny screws close to the focus adjustment hole. By doing so, you should lose a big portion of the light (because the lens as been tilted slightly).
- Get back the exact same power as before, by just touching the horizontal and vertical knobs of the mount of the collimator.
- Once you have the same power as before, start displacing the rotating knob from S+K by a tiny amount from the position you were (focus position 1). This is very sensitive, and you should see the power changing quite a bit.
- No matter if the power decreased or increased, stay on this new focus position (focus position 2). Start doing a "walking" just like when you tried to inject the fiber. Find the maximum value of the signal and compare it to the value you had at the previous focus position (position 1).
- If the value at position 2 is bigger than the one at position 1, repeat the procedure by displacing the rotating knob from S+K in the same direction as previously. If not, go in the other direction.
- By continuing this procedure, you should be able to identify the position of the focus which gives the best signal. Stay at this position.
- Fix the 2 tiny screws progressively until the collimator lens is fixed. By doing so, you should lose a big portion of the signal you had.
- Get back the exact same power as before, by just touching the horizontal and vertical knobs of the mount of the collimator.
- If the power is not the same as before, try doing a walking. If it is still lower, the focus has moved while you screwed the tiny screws: loosen them again, and repeat the whole procedure again to find the correct position.
- If the power is the same as before (the maximum you had), measure the input power, output power, the coupling efficiency, and write it down on the labbook.
- Job done, you can now start the "polarization maintaining procedure (see "How to ..." on the topic).


## How to... do the polarisation maintaining of an optical fiber

Here we will use the Schäfter + Kirchhoff polarimeter, as it is a very powerful tool that can give exellent results. At the end, we will see the alternative case when you do not have such an expensive device (not recommended, though).


### With S+K polarimeter

- Make sure that you injected properly your fiber, so that you have a decent injection efficiency.
- Make sure that the polarization is well defined: having a PBS somewhere in the path before the fiber injection is an easy way to get that. On a typical optical setup, there is often a PBS fixing the polarization somewhere before the fiber.
- Even having a PBS before does not make the polarization well defined: leakage from the PBS can be significant. The safe way is to repartition the power on the PBS (e.g. with a lambda/2 placed before) such that most of the power goes in the path that will go to your fiber. That way, most of the light passing has the correct polarization.
- If the power is to much for the S+K polarimeter (ALWAYS PUT LESS THAN 1 mW on the polarimeter!!! otherwise you can damage it, and it is VERY expensive), the safest way to reduce it is to use neutral density filter, just before or after the fiber. Using an AOM can work too, unless you send very little power and the scattering from the crystal becomes significant. As said before, never use a PBS to reduce the power (polarization ill defined in that case).
- Make sure that your laser is locked to the correct frequency.
- If your laser is locked, your fiber is injected, your polarization well defined and your power below 1 mW, you can start using the polarimeter.
- ALWAYS keep the polarimeter iris closed when you handle it. You can open it slowly only when everything is ready and when the measurement is running.
- With the iris of the polarimeter closed, send light from the fiber into it, either in free space coming out of a collimator, or by using the fiber holder that is in the polarimeter's box.
- Connect the polarimeter to the lab laptop and launch the program.
- Select the correct wavelength at the program startup. We have 2 polarimeters with different wavelength ranges. Make sure that you are using the correct one.
- Now make sure that the measurement is running (should be automatic): values update and the polarimeter makes some noise.
- Now open SLOWLY the iris, looking at the intensity bar (0-100%), to be sure not to put too much power and saturate/BURN the polarimeter.
- Put a decent amount of power, such as the noise of the measurement is small. If in free space configuration, align the beam so that it goes well into the polarimeter (check intensity bar).
- Use the ???? button, and start heating the fiber for 30s by holding it with your hands. The polarimeter should record an orange circle on the Poincaré sphere (on the right screen).
- The poles of the Poincaré sphere are circular left and circular right polarization. The equator is for all linear polarizations.
- For proper polarization maintaining, the light should be linear and aligned onto one of the 2 axises of the fiber. It should then come out linear on the same axis. The recorded circle must thus have its center on the equator and its radius (made by thermal fluctuations from your hands) should be as small as possible.
- Typically, we mostly care about radius size, as fluctuations are the most common issue. This is quantify by the "Delta eta" parameter given in the left screen.
- Typically, a Delta eta parameter below 1 is excellent, below 5 is fine, around 10 is really mediocre and should be avoided.
- Once you recorded your first orange circle, you probably need to improve the value of Delta eta.
- Start inserting a lambda/2 in front of the fiber, and adapt its angle to get the smallest Delta eta (repeat the measurement as many times as necessary). You can try to inject on the other axis of the fiber if the first is not satisfying (some differences, depending on the quality of the retardation of the waveplate, and of the polarization of the light). You can also tilt the waveplate to get the best results.
- Once you have obtained a good Delta eta with your waveplate, you should consider removing it, and get the same result by rotating the fiber collimator. Waveplates are very expensive (easily 200 euros each, for cheap ones, + cost of the mounts), so if you can save some, do it.
- For doing the polarization maintaining without the waveplate, just unfix the (homemade) collimator holder, rotate it, and fix it back. If you have a good hand control and if you mounted your collimator properly, you should still have light after the fiber, and you can just get a bit more light out by adjusting the knob of the collimator mount. Then do the measurement of Delta eta again, and see if it is better.
- Repeat the procedure, rotating the collimator, until you get the smallest Delta eta, hopefully the same value you got with the lambda/2 in the path, certainly around 3 or below.
- Close the iris of the polarimeter, stop the program, and put it in its box. Write down the value of Delta eta reached in the labbook.
- Job done.


### Without S+K polarimeter

Let us now see the unfortunate, but not desperate case when you do not have this expensive S+K polarimeter.

- The steps are the same as described previously, except that after the fiber you will place a lambda/2, followed by a PBS, and a powermeter/photodiode on one of the 2 paths of the PBS.
- Rotate the lambda/2 such that the light is split 50/50 between the 2 paths. That way the measurement will be the most sensitive.
- To check the quality of the polarization maintaining, heat up the fiber with your hands, and record the amplitude of the fluctuations of the signal on your powermeter/PD.
- Minimize these fluctuations by making the polarization maintaining better (by rotating a lambda/2 in front of the fiber (recommended) or by rotating the collimator (painful in that case, but I know you can do it)). Typically, rotate the lambda/2 in front of the fiber, adapt the lambda/2 after the fiber such as there is always 50/50 on both paths, then heat up the fiber and compare the fluctuations in this new configuration.
- Repeat untill you found the minimum of fluctuations.
- Job done.


## How to... clean a mirror/lens/waveplate

- When manipulating optics, do not touch the optic useful surface (use lens cleaning tissue to handle it, or at worst powder free gloves). If you touched it, you need to clean it right away (finger grease dried for months is very hard to remove).
- First clean by just blowing air with the tiny air pump. Do not use air duster in spray cans, as they still deposit some product. Continue until this does not have any more effect.
- Use high purity aceton (99.95% available in the lab).
- NEVER use the same cleaning tissue twice. You risk otherwise to scratch the optic by pressing and moving dust particles on it.
- Fold a thorlabs "lens cleaning tissue" (MC-5), and hold it folded by using tweezers. Be carefull when you fold it not to touch the part of the tissue that will be used to clean the optic: if you did touch it, throw the tissue away (your fingers are extremely greasy).
- Put the aceton on the tissue, and shake the tissue off once to remove big droplets.
- Pass gently the tissue on the optic, on one continuous sweep. Make sure the tweezer does not touch the optic, or you will scratch it.
- Throw the tissue away.
- If the optic is not clean, fold another tissue, and repeat the procedure, as many time as necessary, until the optic is clean.
- For big mirrors (2"), you can try differently: don't fold the tissue, put aceton on almost all of it, and holding a dry corner with your hand, make the tissue pass accross the unmounted mirror once. That is quite gentle, and can clean the whole surface in one sweep.


## How to... clean an optical fiber

The following steps needs to be taken in order (they are ordered from the least likely to damage the fiber to the most dangerous). The rule is: if the fiber is clean, stop ; if the step works (fiber gets cleaner), continue this step until it doesn't work anymore, or until the fiber is clean ; if the cleaning step does not work, pass to the next one.

- Use the fiberscope to first look at the status of the fiber. Use the fiberscope after each cleaning action to check what you have done.
- First clean by just blowing air with the tiny air pump. Do not use air duster in spray cans, as they still deposit some product.
- Do not use aceton (can damage plastics), use high purity ethanol only (leave less traces, which is important for avoiding damages by burning on high power fibers.
- NEVER use the same cleaning tissue twice. You risk otherwise to scratch the fiber by pressing and moving dust particles on its tip.
- Put ethanol (a droplet) on a thorlabs "lens cleaning tissue" (MC-5), unfolded. Hold the fiber in one hand, the corner of the tissue in the other, and pass gently the fiber on the part where there is ethanol, then on the dry part.
- Fold a thorlabs cleaning tissue, and hold it folded by using tweezers. Put ethanol on the tissue. Pass gently the tissue on the tip of the fiber. Do NOT pass twice the tip of the fiber at the same place on the tissue.
- Do the same as the previous step, but applying more pressure while cleaning.
- If the fiber is still not clean, it might be scratched or burned, in which case you need to polish it (topic for another "How to...").

## How to... place a Faraday isolator

Before placing a Faraday isolator, here are 2 important safety advices:

- A Faraday isolator uses optics (typically PBS cubes) that are placed on purpose at angles such that the reflection of the beam sideways goes NOT in the horizontal plane. Therefore, pay great care to protect yourself and the others from laser beams that go somewhat vertically to eye level. Laser goggles are the best way to protect yourself.
- A Farady isolator contains powerful magnet. Therefore, it has a tendency to attract lots of metallic objects like screws or your M6 hex key, for example. This is a problem when these metallic objects go flying in the direction of the PBS of the isolator, and risk breaking these optics. Pay attention to the movement that you do, always remembering the presence of this magnet.
- Not a safety advice, but a remark: there will be necessarily a few optics between the path of the laser and the isolator (beam shaping prism, lambda/2, ...). The reflections from these optics can be disturbing for the laser. Therefore it is a safe practice to slightly tilt these optics, so that the reflections do not come directly back in the laser. Do not abuse with the tilt though.

Now, that being said, on to the alignment of an optical isolator.

- The main purpose of the Faraday isolator is to prevent any light from going back into the diode. Therefore, the primary concern when placing an isolator is to maximize the extinction ratio of light coming in the reverse direction of the isolator. The secondary concern is the transmission of the isolator, in the normal direction, but it is secondary.
- First, put the isolator in the reverse direction. The beam passing through must be align properly with the axis (or the apertures) of the isolator. PBS cubes are usually angle dependent, so if the beam is not aligned (both horizontally and vertically) with the isolator, then you will do a poor job and render the isolator useless.
- Once the isolator is placed correctly in the reverse direction, place a lambda/2 between the laser and the isolator (i assume your laser has a linear polarisation).
- Change the RELATIVE orientation of the 2 PBS, trying to minimize the light transmitted through the isolator, for ALL orientations of the polarization (rotate the lambda/2 to make a full 90° on the angle of the polarisation).
- One could argue that the best result of exctinction between the two cube is achieved if all the light passes through the first, and you minimize the transmission on the 2nd cube. But I think this is a mistake, as you want to protect the laser from ALL polarization coming back, and not only the one you sent (for example, dielectric mirrors have a tendency to rotate the polarisation). Since you have no way of knowing for sure what will come back, do the optimization for all the polarizations.
- Measure the incoming power and the maximum of the transmitted power for ALL orientation of the lambda/2: this is the attenuation that you must write (in dB) in the labbook. Compare it with the attenuation from the isolator specsheet: it should be compatible, and if it is worse, you have made a mistake. An attenuation of 30 dB is typical for a single stage isolator.
- Now that the relative orientation between the 2 PBS has been correctly placed, fix it if possible, and in any case DO NOT change it anymore.
- Place the isolator back in the normal direction. Again, the laser beam must be aligned properly with the axis of the isolator.
- If you use this isolator for a slave laser, which will be seeded by a master laser, then the 2nd cube (counting in the direction of the propagation of light) must be oriented such that the reflected beam propagates horizontally. Since you CAN NOT change the relative orientation of the 2 PBS anymore, you have to rotate the WHOLE BODY of the isolator so that the 2nd cube is well placed. In that case, the laser incoming polarisation does not correspond to the maximum transmission, so you have to keep the lambda/2 between the laser and the isolator. Maximize the transmission using the lambda/2, fix the waveplate and write down the transmission of the isolator in the labbook.
- If you do not use the isolator for a slave, you must remove the lambda/2 (which saves up money) and rotate the WHOLE BODY of the isolator such that the transmission is maximized. Measure and write down the transmission of the isolator in the labbook.
- Job done.